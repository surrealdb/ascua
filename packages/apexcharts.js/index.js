'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/apexcharts/dist/apexcharts.js', fastboot);

		app.import('vendor/apexcharts.js', {
			exports: { ApexCharts: ['default'] }
		});

	},

};
