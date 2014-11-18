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
 * @class LSU Scheduler API
 */

// New relic does our performance and avaliability testing/analytics
// This should be the first statement in index.
require('newrelic');

// Import the npm modules we need to use
var express = require('express'), // Express is the server provider
  app = express(), // Our app is based on it
  http = require('http'), // node's http system
  compress = require('compression'), // this compresses stuff
  db = require('./models'), // Sequelize!
  httpRequest = require('request').defaults({jar: true, debug: true}), // We use this to get data from lsu servers
  bodyParser = require('body-parser'), // So we can parse the various formats we will recieve
  cors = require('cors'),
  api = require('sequelize-json-api'); // Enable cors to allow cross site scripting cause why not

// Configure express
app.set('port', (process.env.PORT || 5000)); // Port to use, process.env.PORT is set by heroku
app.use(compress()); // Tells Express to use gzip encryption
app.use(express.static(__dirname + '/dist')); // Tells Express to serve the entire /dist directory generated by `ember build`
app.use( bodyParser.json() ); // JSON-encoded body support
app.use( cors() ); // cors enables cross site scripting
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// Setup the api
api = api(db.sequelize,{
  endpoint: '/api', // needed for href calculation
});

// Create routes for all models that exist in ./models and are defined in ./models/index.js
api.initialize();

// Use the routes sequelize-json-api (api) generated for us
app.use('/api', api);

/**
 * Send html file if it doesn't match any backend route
 *
 * @method Get *
 * @return {Status Code} 404 (Not Found)
 */
app.get('*', function(request, response){
  response.sendFile(__dirname + '/dist/index.html');
});

// Sync the database and start start listening so we can respond to requests
db.sequelize.sync({ force: true }).complete(function(err) {
  if (err) {
    throw err[0];
  } else {
    http.createServer(app).listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'));
    });
  }
});

/**
 * Sends a request to an LSU server that returns the names of all of the departments
 * at LSU and saves them to the database
 *
 * @param int number of hours to wait between requests
 * @return void
 */
var fetchDepartments = function(){
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

// Seconds to wait before inital data fetches. Slower computers may take longer
// to set everything up and be ready to start saving data into the database
var secondsToWait = 5;

// Wait five seconds to call fetchDepartments, which runs on an interval after that
setTimeout(function(){
  fetchDepartments(); // fetch the departments
  setInterval(function(){ // fetch them every 24 hours
    fetchDepartments();
  }, 1000*60*60*24);
}, 1000*secondsToWait);
