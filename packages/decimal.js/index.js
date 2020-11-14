'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/decimal.js/decimal.js');

		app.import('vendor/decimal.js', {
			exports: { 'decimal.js': ['default'] }
		});

	},

};
