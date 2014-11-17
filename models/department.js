//========================================================================================
/* 
/* FILE NAME: Department.js
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
 * Model for a LSU Department. Only used by the back end.
 *
 * @class Sequelize Department Model
 * @constructor 
 */

 /**
 * Constructs a new Sequelize Department Model
 *
 * @method Constructor
 * @param {String} Name
 */

module.exports = function(sequelize, DataTypes){
  return sequelize.define("department", {
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    departmentAbbreviation: {type: DataTypes.STRING, unique: true, allowNull: false}

  })
}
