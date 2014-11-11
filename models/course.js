module.exports = function(sequelize, DataTypes){
  return sequelize.define("courseOffering", {
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

        

      

