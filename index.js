//========================================================================================
/* 
/* FILE NAME: Index.js
/* 
/* DESCRIPTION: API for LSU Scheduler
/* 
/* AUTHORS: Chester Schofield, 
/*
/* REFERENCE: 
/* 
/* DATE BY CHANGE DESCRIPTION
/* ======== ======= =========== =============
/* 11/16/2014 Chester Schofield  Created get and post for courses
/*  
//========================================================================================

/**
 * Provides access data access to the LSU Scheduler database
 *
 * @class LSU Scheduler API
 */

// New relic does our performance and avaliability testing/analytics
require('newrelic');
// Setup some variables as npm modules
var express = require('express'),
  app = express(),
  http = require('http'),
  compress = require('compression'),
  db = require('./models'),
  httpRequest = require('request').defaults({jar: true, debug: true}),
  bodyParser = require('body-parser'),
  cors = require('cors');

// Tell Express which port to use, process.env.PORT is set by heroku
app.set('port', (process.env.PORT || 5000));

// Tells Express to use gzip encryption
app.use(compress());
// Tells Express to serve the entire /dist directory generated by `ember build`
app.use(express.static(__dirname + '/dist'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( cors() );       // cors
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

<<<<<<< HEAD
/**
 * Example select statement from db
 *
 * @method Get Test_DB
 * @return {Object} Test_DB
 */
=======

// This created a merge conflict =======================================
// app.get('/db', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//     client.query('SELECT * FROM test_table', function(err, result) {
//       done();
//       if(err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.send(result.rows); }
// =====================================================================


// Example select statement from db
>>>>>>> master
app.get('/api/test_db', function(request, response){
  db.test_db.findAll().complete(function(err, test_dbs) {
    if (!!err) {
      console.log('An error occurred while returning models', err)
    } else if (!test_dbs) {
      response.send(test_dbs);
      console.log('uh oh.')
    } else {
      response.send(test_dbs);
    }
  });
});

/**
 * API method to add a new Department to the database
 *
 * @method Post Department
 * @param {Object} Department object sent in the URL
 * @return {Status Code} 200 (OK) / 500 (Internal Server Error)
 */
app.get('/api/department', function(request, response){
    var name = request.query.name;
    var department = db.department.build({
      'name': name
    });
  department.save()
    .complete(function(err) {
      if (!!err) {
        response.send('The instance has not been saved:');
        console.log('The instance has not been saved:', err)
      } else {
        console.log('We have a persisted instance now');
        response.send('We have a persisted instance now');
      }
    });
});

/**
 * API method retrieve all Departments from the database
 *
 * @method Get Departments
 * @return {Status Code} 200 (OK) / 404 (Not Found) / 500 (Internal Server Error) 
 */
app.get('/api/departments', function(request, response){
  db.department.findAll().complete(function(err, departments) {
    if (!!err) {
      console.log('An error occurred while returning models', err)
    } else if (!departments) {
      response.send('uh oh.');
      console.log('uh oh.')
    } else {
      response.send({'departments': departments});
    }
  });
});

// Example fetch request to get lsu course info
app.get('/fetch/courses', function (request, response) {
  var url = 'http://appl003.lsu.edu/booklet2.nsf/All/02FDBC283730AC5386257D69002EC178?OpenDocument&SemesterDesc=Spring+2015&Department=ACCOUNTING';
  // -H 'Cookie: __utma=70724879.1274179569.1412707450.1412707450.1412982781.2; __utmz=70724879.1412982781.2.2.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); sso-logout-time="Thu Nov 06 2014 19:56:55 GMT-0600 (Central Standard Time)"; __utma=1.944113822.1415309095.1415309095.1415309095.1; __utmb=1.2.10.1415309095; __utmc=1; __utmz=1.1415309095.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmt=1'
  httpRequest({
    'url': url,
    headers: {
     'Host': 'appl003.lsu.edu',
     'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:33.0) Gecko/20100101 Firefox/33.0',
     'Referer': 'http://appl003.lsu.edu/booklet2.nsf/Selector2?OpenForm',
     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
     'Connection': 'keep-alive'
    }
  },
  function (httpError, httpResponse, httpBody) {
    response.send(httpBody);
  });
});
 
 /**
 * API method to add a new Course the database
 *
 * @method Post Course
 * @param {Object} Department object sent in the body
 * @return {Status Code} 200 (OK) / 500 (Internal Server Error)
 */
app.post('/api/course', function(request, response)
{
  var courseBuild = db.course.build({
      'available': request.body.available,
      'enrollmentCount': request.body.enrollmentCount,
      'courseAbbrivation': request.body.courseAbbrivation,
      'courseNumber': request.body.courseNumber,
      'type': request.body.type,
      'sectionNumber': request.body.sectionNumber,
      'courseTitle': request.body.courseTitle,
      'creditHour': request.body.creditHour,
      'timeBegin': request.body.timeBegin,
      'timeEnd': request.body.timeEnd,
      'days': request.body.days,
      'room': request.body.room,
      'building': request.body.building,
      'specialEnrollment': request.body.specialEnrollment,
      'instructor': request.body.instructor
    });
    courseBuild.save()
    .complete(function(err) {
        if (!!err) {
          response.send('The instance has not been saved:');
          console.log('The instance has not been saved:', err)
        } else {
          console.log('We have a persisted instance now');
          response.send('We have a persisted instance now');
        }
    });
  });

/**
 * API method retrieve all Courses from the database
 *
 * @method Get Courses
 * @return {Status Code} 200 (OK) / 404 (Not Found) / 500 (Internal Server Error) 
 */
app.get('/api/course', function(request, response){
  db.course.findAll().complete(function(err, courses) {
    if (!!err) {
      console.log('An error occurred while returning models', err)
    } else if (!courses) {
      response.send('uh oh.');
      console.log('uh oh.')
    } else {
      response.send({'courses': courses});
    }
  });
});

/**
 * Send html file if it doesn't match any backend route
 *
 * @method Get *
 * @return {Status Code} 404 (Not Found) 
 */
app.get('*', function(request, response){
  response.sendFile(__dirname + '/dist/index.html');
});

db.sequelize.sync().complete(function(err) {
  if (err) {
    throw err[0];
  } else {
    http.createServer(app).listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'));
    });
  }
});

// Example fetch request to get lsu course info
var fetchDepartments = function(){
  console.log('Fetching departments...');
  var departmentsExp = /([A-Z,'\s;pma&-]{3,})(?=<\/select>|$)/gm;
  var url = 'http://appl003.lsu.edu/booklet2.nsf/Selector2?OpenForm';
  httpRequest({
    'url': url,
    headers: {
      'Host': 'appl003.lsu.edu',
      'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:33.0) Gecko/20100101 Firefox/33.0',
      'Referer': 'http://appl003.lsu.edu/booklet2.nsf/Selector2?OpenForm',
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
  // Fetch them every day
  setTimeout(fetchDepartments, 1000*60*60*24);
}

// Wait five seconds and fetch the departments
setTimeout(fetchDepartments, 1000*5);
