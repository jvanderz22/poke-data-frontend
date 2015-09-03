import DS from 'ember-data';

export default DS.Model.extend({
  email:                  DS.attr(),

  //post attrs only
  password:               DS.attr(),
  passwordConfirmation:   DS.attr()
});
