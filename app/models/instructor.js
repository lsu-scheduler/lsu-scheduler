import DS from 'ember-data';

export default DS.Model.extend({
	// string, number, boolean, and date
	// name: DS.attr('string')
	name: DS.attr('string'),
    courseAbbrevation: DS.attr('string'),
    courseNumber: DS.attr('number'),
    room: DS.attr('number'),
    building: DS.attr('string'),
    department: DS.attr('string')
});
