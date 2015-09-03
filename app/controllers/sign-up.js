import Ember from 'ember';

export default Ember.Controller.extend({
  routing: Ember.inject.service('-routing'),

  actions: {
    signUp() {
      var content = this.get('content');
      var user = this.store.createRecord('user', {
        email: content.email,
        password: content.password,
        passwordConfirmation: content.passwordConfirmation
      });
      var _this = this
      user.save().then(function(data){
        _this.get('routing').transitionToRoute('teams')
      }).catch(function(err){
        console.log(err)
      });
    }
  }
});
