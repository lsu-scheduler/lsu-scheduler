import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://lsu-scheduler.herokuapp.com/api'
});
