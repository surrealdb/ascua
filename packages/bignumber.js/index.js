'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/bignumber.js/bignumber.js');

		app.import('vendor/bignumber.js', {
			exports: { 'bignumber.js': ['default'] }
		});

	},

};
