/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp({
    babel: {
      optional: ['es7.decorators']
    }
  })
  app.import('bower_components/bootstrap/dist/css/bootstrap.css')
  return app.toTree()
};
