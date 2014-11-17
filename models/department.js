module.exports = function(sequelize, DataTypes){
  return sequelize.define("department", {
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
  })
}
