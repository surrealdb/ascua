'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot' }]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/jsoneditor/dist/jsoneditor.js', fastboot);
		app.import('node_modules/jsoneditor/dist/jsoneditor.css');

		app.import('vendor/jsoneditor.js', {
			exports: { jsoneditor: ['default'] }
		});

	},

	treeForPublic(tree) {

		return tree;

	},

};
