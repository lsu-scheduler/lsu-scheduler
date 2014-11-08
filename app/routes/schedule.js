import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      events: Ember.A([
        {title: "Dinner Event", start: "2014-06-15" },
        {title: "Breakfast Event", start: "2014-06-25T07:00:00", allDay: false }
      ])
    };
  }
});
