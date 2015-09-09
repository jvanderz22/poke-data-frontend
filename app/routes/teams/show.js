import Ember from 'ember';

export default Ember.Route.extend({
  model(context) {
    return this.get('store').findRecord('team', context.teamId);
  },

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
