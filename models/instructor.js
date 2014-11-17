/**
 * Model for a LSU Instructor. Only used by the back end.
 *
 * @class Sequelize Instructor Model
 * @constructor 
 */

 /**
 * Constructs a new Sequelize Instructor Model
 *
 * @method Constructor
 * @param {String} Name
 * @param {Integer} Course Number
 * @param {String} Course Abbreviation
 * @param {String} Department
 * @param {Integer} Room Number
 * @param {String} Building Name
 */

module.exports = function(sequelize, DataTypes){
  return sequelize.define("instructor", {
	    name: DataTypes.STRING,
	    courseNumber: DataTypes.INTEGER,
	    courseAbbreviation: DataTypes.STRING,
	    department: DataTypes.STRING,
	    room: DataTypes.INTEGER,
	    building: DataTypes.STRING
  })
}