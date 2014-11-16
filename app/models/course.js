import DS from 'ember-data';

export default DS.Model.extend({
	// string, number, boolean, and date
	// name: DS.attr('string')
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
