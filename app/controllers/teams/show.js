import Ember from 'ember';

export default Ember.Controller.extend({
  routing: Ember.inject.service('-routing'),

  deletingRecord(promise) {
    promise.then(json => {
      this.get('routing').transitionTo('teams')
    }, xhr => {
      this.get('model').rollback()
    });
  },

  actions: {
    deletingRecord(promise) {
      promise.then(json => {
        this.get('routing').transitionTo('teams')
      }, xhr => {
        this.get('model').rollback()
      });
    }
  }
});
