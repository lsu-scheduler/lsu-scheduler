import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: '//localhost:5000/api'
});
