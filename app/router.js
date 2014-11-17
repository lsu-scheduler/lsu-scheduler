import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.reopen({
  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }.on('didTransition')
});

Router.map(function() {
  // Routes for Departments
  this.resource('departments', { path: '/departments' }, function() {
    this.route('index', { path: '/' });
  });
  // Routes for Courses
  this.resource('courses', { path: '/courses' }, function() {
    this.route('index', { path: '/' });
  });
  // Schedule page
  this.route('schedule', { path: '/schedule' });
  // Stack page
  this.route('stack');
  // Team page
  this.route('team');
});

export default Router;
