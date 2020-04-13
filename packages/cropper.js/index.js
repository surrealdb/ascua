'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/cropperjs/dist/cropper.js', fastboot);
		app.import('node_modules/cropperjs/dist/cropper.css');

		app.import('vendor/cropper.js', {
			exports: { cropper: ['default'] }
		});

	},

};
