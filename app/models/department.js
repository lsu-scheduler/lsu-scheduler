import DS from 'ember-data';

 /**
 * Model for a LSU Department. Only used by the front end.
 *
 * @class Application Department Model
 * @constructor 
 */

 /**
 * Constructs a new Application Department Model
 *
 * @method Constructor
 * @param {String} Name
 */

export default DS.Model.extend({
  name: DS.attr('string')
});


