module.exports = function(sequelize, DataTypes){
  return sequelize.define("department", {
    name: DataTypes.STRING
  })
}
