'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/jszip/dist/jszip.js', fastboot);

		app.import('vendor/zip.js', {
			exports: { zip: ['default'] }
		});

	},

};
