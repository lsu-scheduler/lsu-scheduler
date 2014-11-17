import DS from 'ember-data';

//========================================================================================
/* 
/* FILE NAME: App/Modules/Instructor.js
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
 * Model for a LSU Instructor. Used by the front end.
 *
 * @class Application Instructor Model
 * @constructor 
 */

 /**
 * Constructs a new Application Instructor Model
 *
 * @method Constructor
 * @param {String} Name
 * @param {String} Course Abbreviation
 * @param {Integer} Course Number
 * @param {Integer} Room Number
 * @param {String} Building Name
 * @param {String} Department
 */

export default DS.Model.extend({
	name: DS.attr('string'),
    courseAbbrevation: DS.attr('string'),
    courseNumber: DS.attr('number'),
    room: DS.attr('number'),
    building: DS.attr('string'),
    department: DS.attr('string')
});
