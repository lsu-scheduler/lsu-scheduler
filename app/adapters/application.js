import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://localhost:5000/api'
});
