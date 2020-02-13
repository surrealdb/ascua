'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/quill/dist/quill.js');
		app.import('node_modules/quill/dist/quill.snow.css');
		app.import('node_modules/quill/dist/quill.bubble.css');

		app.import('vendor/quill.js', {
			exports: { quill: ['default'] }
		});

	},

};
