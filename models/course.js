//========================================================================================
/* 
/* FILE NAME: Modules/Course.js
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
 * Model for a LSU Course. Only used by the back end.
 *
 * @class Sequelize Course Model
 * @constructor 
 */

 /**
 * Constructs a new Sequelize Course Model
 *
 * @method Constructor
 * @param {String} Available
 * @param {String} Enrollment Count
 * @param {String} Course Abbreviation
 * @param {Integer} Course Number
 * @param {String} Course Type
 * @param {Integer} Section Number
 * @param {String} Course Title
 * @param {Decimal} Credit Hour
 * @param {DateTime} Time Begin
 * @param {DateTime} Time End
 * @param {String} Days
 * @param {Integer} Room Number
 * @param {String} Building Name
 * @param {String} Special Enrollment
 * @param {String} Instructor Name
 */

module.exports = function(sequelize, DataTypes){
  return sequelize.define("course", {
    available: DataTypes.STRING,
    enrollmentCount: DataTypes.STRING,
    courseAbbrivation: DataTypes.STRING,
    courseNumber: DataTypes.INTEGER,
    type: DataTypes.STRING,
    sectionNumber: DataTypes.INTEGER,
    courseTitle: DataTypes.STRING,
    creditHour: DataTypes.DECIMAL(1, 1),
    timeBegin: DataTypes.DATE,
    timeEnd: DataTypes.DATE,
    days: DataTypes.STRING,
    room: DataTypes.INTEGER,
    building: DataTypes.STRING,
    specialEnrollment: DataTypes.STRING,
    instructor: DataTypes.STRING
  })
}
