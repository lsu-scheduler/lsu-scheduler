import Ember from 'ember';

export default Ember.Route.extend({

	// What does this do?

	/**
	 * 
	 *
	 * @method 
	 * @return {Object} 
	 */
	model: function (){
    	return this.store.find('course');
  	}
});
