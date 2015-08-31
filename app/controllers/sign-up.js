import Ember from 'ember';
import DS from 'ember-data';


export default Ember.Controller.extend({
  actions: {
    signUp() {
      var data = this.getProperties('email', 'password', 'passwordConfirmation')
      var user = this.store.createRecord('user', data)
      user.save().then(function(data){
        debugger
        console.log(data)
      }).catch(function(err){
        debugger
        console.log(err)
      });
    }
  }
});
