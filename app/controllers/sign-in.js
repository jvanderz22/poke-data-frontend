import Ember from 'ember';

export default Ember.Controller.extend({
  routing: Ember.inject.service('-routing'),

  actions: {
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      var promise = this.get('session').authenticate('simple-auth-authenticator:devise', data);
      promise.then(data => {
        this.get('routing').transitionTo('index');
      }, (error) => {

        debugger
      });
    }
  }
});
