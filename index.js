/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-forge'

  included: function included(app) {
    this.app = app;

    app.import(app.bowerDirectory + '/forge/js/forge.min.js');
  }
};
