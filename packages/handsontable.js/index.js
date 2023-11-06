'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot' }]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/handsontable/dist/handsontable.full.js', fastboot);
		app.import('node_modules/handsontable/dist/handsontable.full.css');

		app.import('vendor/handsontable.js', {
			exports: { handsontable: ['default'] }
		});

	},

	treeForPublic(tree) {

		return tree;

	},

};
