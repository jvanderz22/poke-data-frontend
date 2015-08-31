import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    create() {
      //this is bad
      var pokemon = [this.pokemon1, this.pokemon2, this.pokemon3, this.pokemon4, this.pokemon5, this.pokemon6]
      var data = { name: this.name, pokemon: pokemon }
      var record = this.get('store').createRecord('team', data);
      var promise  = record.save()
      return promise;
    }
  }
});
