import DS from 'ember-data';

//========================================================================================
/* 
/* FILE NAME: App/Modules/Department.js
/* 
/* DESCRIPTION: 
/* 
/* AUTHORS: Chester Schofield
/*
/* REFERENCE: 
/* 
/* DATE BY CHANGE DESCRIPTION
/* ======== ======= =========== 
/* 11/17/2014 Chester Added base comments
/*  
//========================================================================================

 /**
 * Model for a LSU Department. Only used by the front end.
 *
 * @class Application Department Model
 * @constructor 
 */

 /**
 * Constructs a new Application Department Model
 *
 * @method Constructor
 * @param {String} Name
 */

export default DS.Model.extend({
  name: DS.attr('string'),
  departmentAbbreviation: DS.attr('string')
});


