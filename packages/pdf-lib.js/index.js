'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/pdf-lib/dist/pdf-lib.js', fastboot);
		app.import('node_modules/@pdf-lib/fontkit/dist/fontkit.umd.js', fastboot);

		app.import('vendor/pdf-lib.js', {
			exports: { 'pdf-lib': ['default'] }
		});

		app.import('vendor/fontkit.js', {
			exports: { 'fontkit': ['default'] }
		});

	},

};
