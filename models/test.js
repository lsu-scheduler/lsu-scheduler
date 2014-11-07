module.exports = function(sequelize, DataTypes){
  return sequelize.define("test_db", {
    name: DataTypes.STRING
  })
}
