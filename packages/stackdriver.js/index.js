'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot' }]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/stackdriver-errors-js/dist/stackdriver-errors-concat.js', fastboot);

		app.import('vendor/stackdriver.js', {
			exports: { StackdriverErrorReporter: ['default'] }
		});

	},

};
