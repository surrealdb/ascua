'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		// Import Autotrack analytics library
		app.import('node_modules/autotrack/autotrack.js', {
			outputFile: 'assets/autotrack.js'
		});

	},

};
