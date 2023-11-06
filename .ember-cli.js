'use strict';

const { setEdition } = require('@ember/edition-utils');

setEdition('octane');

module.exports = {
  /**
    Setting `isTypeScriptProject` to true will force the blueprint generators to generate TypeScript
    rather than JavaScript by default, when a TypeScript version of a given blueprint is available.
  */
  "isTypeScriptProject": false
}
