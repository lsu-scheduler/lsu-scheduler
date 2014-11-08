import Ember from 'ember';

export default Ember.Component.extend({
    _initializeCalendar: (function() {
      return this.$("#schedule").fullCalendar({
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
