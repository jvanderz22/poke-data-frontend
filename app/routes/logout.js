import Ember from 'ember';

export default Ember.Route.extend({
  routing: Ember.inject.service('-routing'),

  beforeModel: function() {
    this.get('session').invalidate()
    this.get('routing').redirect('application')
  }
});
