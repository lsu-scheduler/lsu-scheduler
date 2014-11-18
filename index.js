//========================================================================================
/*
/* FILE NAME: Index.js
/*
/* DESCRIPTION: Server script that controls the LSU Scheduler backend, including
/* the API used to communicate with front-end clients, managing data requests,
/* and fetching updated information from LSU's system.
/*
/* AUTHORS: Chester Schofield, Selby Kendrick
/*
/* REFERENCE:
/*
/* DATE BY CHANGE DESCRIPTION
/* ======== ======= =========== =============
/* 11/16/2014 Chester Schofield  Created get and post for courses
/* 11/17/2014 Selby Kendrick     Removed example get for showing how to fetch
/*                               course info, implemented it for departments,
/*                               added more detailed comments, and cleaned up the
/*                               code some.
/*
//========================================================================================

/**
 * Server script that controls the LSU Scheduler backend, including
 * the API used to communicate with front-end clients, managing data requests,
 * and fetching updated information from LSU's system.
 *
 * @module lsu-scheduler
 * @main lsu-scheduler
 * @class LSU Scheduler
 */

// New relic does our performance and avaliability testing/analytics
// This should be the first statement in index.
require('newrelic');

// Import the npm modules we need to use
var express = require('express'), // Express is the server provider
  http = require('http'), // node's http system
  db = require('./models'); // Sequelize!

var config = {
  sequelizeJsonApi: {
    endpoint: '/api', // needed for href calculation
  }
};

/**
 * Generates API routes for all of the ./models that are allowed in config var
 *
 * @method generateApiRoutes
 * @param {Json} sequelizeJsonApiConfig
 * @return void
 */
var generateApiRoutes = function(sequelizeJsonApiConfig){
  // Configure the api
  var apiRoutes = api = require('sequelize-json-api'); // api mod
  apiRoutes = api(db.sequelize, sequelizeJsonApiConfig);
  //Generate routes for models in config
  apiRoutes.initialize();
  return apiRoutes;
}

/**
 * Configure Express server to use Heroku port or 5000, use gzip compression, automatgickly
 * parse json requests to get  js object, and accept url-encodingsds
 *
 * @method setupExpress
 * @param {Object} express
 * @return void
 */
var setupExpress = function(expressApp){
  var compress = require('compression'), // this compresses stuff
      bodyParser = require('body-parser'), // So we can parse the various formats we will recieve
      cors = require('cors');
  // Configure express
  expressApp.set('port', (process.env.PORT || 5000)); // Port to use, process.env.PORT is set by heroku
  expressApp.use(compress()); // Tells Express to use gzip encryption
  expressApp.use( bodyParser.json() ); // JSON-encoded body support
  expressApp.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  expressApp.use( cors() ); // cors enables cross site scripting
  return expressApp;
}

/**
 * Tell express how to serve routes for /, /docs, and serve a restful api interface
 * of all the models configured in ./models
 *
 * @method setupRouting
 * @param {Object} express
 * @return void
 */
var setupRouting = function(expressApp, apiRoutes){
  // Configure express
  expressApp.use('/', express.static(__dirname + '/dist'));
  // Use api routes
  expressApp.use('/api', apiRoutes);
  expressApp.use('/docs', express.static(__dirname + '/public/docs'));
  // don't throw a 404, just send index.html.  ususally a good idea.
  expressApp.get('*', function(request, response){
    response.sendFile(__dirname + '/dist/index.html');
  });
  return expressApp;
};

/**
 * Runs lsu-scheduler by setting up express, building api routes, and seting up
 * the database to start serving LSU Scheduler and all it's goodness
 *
 * @method run
 * @return void
 */
var run = function(){
  var server = express();

  server = setupExpress(server);

  var apiRoutes = generateApiRoutes(config.sequelizeJsonApi);
  server = setupRouting(server, apiRoutes);

  // Sync the database and start start listening so we can respond to requests
  db.sequelize.sync().complete(function(err) {
    if (err) {
      throw err[0];
    } else {
      http.createServer(server).listen(server.get('port'), function(){
        console.log('Express server listening on port ' + server.get('port'));
      });
    }
  });
};

// run lsu-scheduler
run();

/**
 * Controls fetching information from the open lsu booklet portal
 *
 * @module fetch
 * @main lsu-scheduler
 * @class fetch
 */
var fetch = {
  /**
   * Waits a few seconds before polling for new data, then gets necessary
   * information from LSU. (eg. Departments are long hours data, course info is
   * short hour data.)
   *
   * @method fetchData
   * @param {int} secondsBefore number of seconds before trying to start requesting data
   * @param {int} shortHours number of hours to wait between requests
   * @param {int} longHours number of hours to wait between requests
   * @return void
   */
  fetchData: function(secondsBefore, shortHours, longHours){
    // Wait five seconds to call fetchDepartments, which runs on an interval after that
    setTimeout(function(){
      fetch.fetchDepartments(); // fetch the departments
      setInterval(function(){ // fetch them every 24 hours
        fetch.fetchDepartments();
      }, 1000*60*60*longHours);
    }, 1000*secondsBefore);
  },
  /**
   * Send a request to the public LSU course booklet that returns the names of all
   * of the departments at LSU and saves them to the database
   *
   * @method fetchDepartments
   * @return void
   */
  fetchDepartments: function(){
    var httpRequest = require('request').defaults({jar: true, debug: true});
    console.log('Fetching departments...');
    var departmentsExp = /([A-Z,'\s;pma&-]{3,})(?=<\/select>|$)/gm; // regex
    var url = 'http://appl003.lsu.edu/booklet2.nsf/Selector2?OpenForm';
    httpRequest({
      'url': url,
      headers: {
        'Host': 'appl003.lsu.edu',
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:33.0) Gecko/20100101 Firefox/33.0',
        'Referer': url,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Connection': 'keep-alive'
      }
    },
    function (httpError, httpResponse, httpBody) {
      lineArray = httpBody.match(departmentsExp);
      lineArray.forEach(function(line){
        line = line.trim();
        if(line != ''){
          department = db.department.build({
            'name': line
          });
          department.save().complete(function(err) {
            if (!!err) {
              console.log('The instance has not been saved:', err);
            } else {
              //console.log('We have a persisted instance now');
            }
          });
        }
      });
    });
  }
};

// Start fetching data
fetch.fetchData(5, 3, 72);
