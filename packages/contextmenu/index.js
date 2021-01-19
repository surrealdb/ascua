'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		// Import ES6 library for Electron
		app.import('vendor/import.js', {
			exports: { Electron: ['default'] }
		});

	},

};
