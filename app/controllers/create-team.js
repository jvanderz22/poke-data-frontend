import Ember from 'ember';

export default Ember.Controller.extend({
  pokemonList: Ember.inject.service(),
  store: Ember.inject.service(),
  submissionErrors: [],

  _validatePokemon: function(modelPokemon) {
    var pokemonList = this.get('pokemonList').list;
    var submissionErrors = [];
    var pokemonNumbers = ['1', '2', '3', '4', '5', '6'];
    var _this = this;
    pokemonNumbers.forEach( function(number) {
      var getString = "model.pokemon" + number;
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
      var model = this.get('model');
      if (this._validatePokemon(model)) {
        team = this.get('store').createRecord('team', model);
        team.save();
      }
    }
  }
});
