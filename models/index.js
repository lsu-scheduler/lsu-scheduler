//========================================================================================
/* 
/* FILE NAME: Modules/Index.js
/* 
/* DESCRIPTION: 
/* 
/* AUTHORS: 
/*
/* REFERENCE: 
/* 
/* DATE BY CHANGE DESCRIPTION
/* ======== ======= =========== =============
/* 
/*  
//========================================================================================

/**
 * Main application file for LSU Scheduler
 *
 * Options:
 *
 *   - `stream` defaulting to _stdout_ // options here?
 *
 * Execute with:
 *
 *     node index.js
 *
 */
if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.DATABASE_URL) {
    // the application is executed on Heroku ... use the postgres database
    var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)

    sequelize = new Sequelize(match[5], match[1], match[2], {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  false //false
    })
  } else {
    var fs = require('fs');
    var dbInfo = JSON.parse(fs.readFileSync('./config/database.json', 'utf8'));
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize(dbInfo.dbName, dbInfo.dbUser , dbInfo.dbPassword, {
      dialect:  dbInfo.connectionInfo.dialect,
      protocol: dbInfo.connectionInfo.protocol,
      port:     dbInfo.connectionInfo.port,
      host:    dbInfo.connectionInfo.host,
      logging:  dbInfo.connectionInfo.logging
    }
  );
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    department:      sequelize.import(__dirname + '/department'),
    course:       sequelize.import(__dirname + '/course')
    // add your other models here
  }

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
}

module.exports = global.db
