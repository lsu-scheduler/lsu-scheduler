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
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
    sequelize = new Sequelize('LSU_Scheduler', 'root' , 'bytheway', {
      dialect:  'mysql',
      protocol: 'mysql',
      port:     3306,
      host:    'localhost',
      logging:  false
    }
  );
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    test_db:      sequelize.import(__dirname + '/test'),
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
