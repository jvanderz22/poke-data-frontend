import Ember from 'ember';

export default Ember.Controller.extend({
  pokemonList: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  store: Ember.inject.service(),
  submissionErrors: [],

  _validatePokemon: function(modelPokemon) {
    var pokemonList = this.get('pokemonList').list;
    var submissionErrors = [];
    var pokemonNumbers = ['1', '2', '3', '4', '5', '6'];
    var _this = this;
    pokemonNumbers.forEach( function(number) {
      var getString = "content.pokemon" + number;
      var pokemon = _this.get(getString);
      if (!pokemonList.contains(pokemon)) {
        var error = 'Pokemon  #' + number + ' "' + pokemon + '" is not a valid pokemon';
        submissionErrors.pushObject(error);
      }
    });
    this.set('submissionErrors', submissionErrors);
    return Ember.isEmpty(submissionErrors);
  },


  actions: {
    create: function () {
      var content = this.get('content');
      if (this._validatePokemon(content)) {
        var team = this.get('store').createRecord('team', {
          user_id: content.user_id,
          name: content.name,
          pokemon: [content.pokemon1, content.pokemon2, content.pokemon3,
            content.pokemon4, content.pokemon5, content.pokemon6]
        });
        var promise = team.save();
        promise.then(data => {
          this.get('routing').transitionTo('teams')
        });
      }
    }
  }
});
