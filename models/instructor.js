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