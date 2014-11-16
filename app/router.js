import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('schedule', { path: 'schedule' });

  this.resource('model', { path: 'models/:model_id' }, function() { });

  this.resource('department', { path: 'departments/:department_id' }, function() { });
  this.resource('departments', function() { });

  this.route('stack', { path: 'stack' });

  // Nick: not sure what this does
  this.resource('course', { path: 'courses/:course_id' }, function() { });
});

export default Router;
