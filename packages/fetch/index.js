'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		// Import fetch polyfill
		app.import('node_modules/whatwg-fetch/dist/fetch.umd.js');

	},

};
