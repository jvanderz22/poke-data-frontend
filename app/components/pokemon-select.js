import Ember from 'ember';

export default Ember.Component.extend({
  pokemonList: Ember.inject.service(),
  tagName: 'div',
  classNames: ['pokemon-select'],
  value: null,
  pokemonOptions: Ember.computed( 'pokemonList.list', function() {
    var pokemonNames = this.get('pokemonList.list')
    var mappedPokemon = pokemonNames.map( function(pokemon) {
      return Ember.Object.create({ key: pokemon, value: pokemon });
    });
    return mappedPokemon;
  }),

  a: function(value) {
      console.log(value);
  },
  actions: {
    a: function(value) {
      console.log(value);
    }
  }
});
