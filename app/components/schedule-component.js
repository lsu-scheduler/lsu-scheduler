import Ember from 'ember';

export default Ember.Component.extend({
<<<<<<< HEAD
    _initializeCalendar: (function() {
      return this.$("#schedule").fullCalendar({
=======
    _initializeSchedule: (function() {
      return $("#schedule").fullCalendar({
>>>>>>> cb52da4d0c5365ef5384253beaead35073ee2495
        header: {
  				left: '',
  				center: '',
  				right: 'prev,next'
  			},
  			defaultDate: '2014-06-12',
  			defaultView: 'agendaWeek',
  			editable: true,
        events: this.theEvents
      });
    }).on("didInsertElement"),
    actions: {
      addEvent: function() {
        alert('Gotcha.\n\nHead over to GitHub and make it work.');
        window.location.href = "https://github.com/selbyk/lsu-scheduler";
        var newEvent = {title: "New Event!", start: "2014-06-27T05:00:00", allDay: false};
        this.theEvents.pushObject(newEvent);
        this.$("#schedule").fullCalendar('renderEvent', newEvent, true);
      }
    }
});
