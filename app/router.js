import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/'});
  this.route('login');
  this.route('logout');
  this.route('sign-up');
  this.route('teams', function() {
    this.route('show', { path: ':teamId' });
    this.route('create');
  });
});

export default Router;
