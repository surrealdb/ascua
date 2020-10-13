'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/aos/dist/aos.js', fastboot);

		app.import('node_modules/aos/dist/aos.css');

		app.import('vendor/aos.js', {
			exports: { AOS: ['default'] }
		});

	},

};
