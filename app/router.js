import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/'});
  this.route('sign-in');
  this.route('sign-up');
  this.route('create-team');
});

export default Router;
