'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot' }]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/chart.js/dist/chart.umd.js', fastboot);

		app.import('vendor/chart.js', {
			exports: { Chart: ['default'] }
		});

	},

};
