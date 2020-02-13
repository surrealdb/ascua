'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/jsoneditor/dist/jsoneditor.js');
		app.import('node_modules/jsoneditor/dist/jsoneditor.css');

		app.import('vendor/jsoneditor.js', {
			exports: { jsoneditor: ['default'] }
		});

	},

	treeForPublic(tree) {

		return tree;

	},

};
