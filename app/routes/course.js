import Ember from 'ember';

export default Ember.Route.extend({

	// What does this do?

	model: function (){
    	return this.store.find('course');
  	}
});
