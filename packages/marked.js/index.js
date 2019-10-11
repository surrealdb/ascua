'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/marked/marked.min.js');

		app.import('vendor/marked.js', {
			exports: { marked: ['default'] }
		});

	},

};
