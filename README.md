# Ember-cli-forge

Wraps the [https://github.com/digitalbazaar/forge](forge Javascript encryption library) for use in your Ember app.

Since `forge` does not provide a minified bower package out of the box, this addon provides a script which will build one for you.  

## Installation

* `ember install ember-cli-forge`
* `node node_modules/ember-cli-forge/scripts/build-forge.js`

## Usage

See [https://github.com/digitalbazaar/forge](the forge Github page) for documentation on Forge.

This addon exposes the `forge` library as a global variable, so you can simply use it wherever you need it, such as in this contrived example:

```
import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    encrypt() {
      const val = this.$('#input-text').val();
      const md = forge.md.sha1.create();
      md.update(val, 'utf8');      
      ...
    }
  }
});
