 import DS from 'ember-data';
 
//========================================================================================
/* 
/* FILE NAME: App/Modules/Course.js
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
 * Model for a LSU Course. Only used by the front end.
 *
 * @class Application Course Model
 * @constructor 
 */

 /**
 * Constructs a new Application Course Model
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

export default DS.Model.extend({
	available: DS.attr('string'),
  enrollmentCount: DS.attr('string'),
  courseAbbrivation: DS.attr('string'),
  courseNumber: DS.attr('number'),
  type: DS.attr('string'),
  sectionNumber: DS.attr('number'),
  courseTitle: DS.attr('string'),
  creditHour: DS.attr('number'),
  timeBegin: DS.attr('date'),
  timeEnd: DS.attr('date'),
  days: DS.attr('string'),
  room: DS.attr('number'),
  building: DS.attr('string'),
  specialEnrollment: DS.attr('string'),
  instructor: DS.attr('string')
});
