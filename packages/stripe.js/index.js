'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('vendor/stripejs.js', {
			exports: { stripe: ['default'] }
		});

	},

	treeForPublic(tree) {

		return tree;

	},

	contentFor(type) {

		if (type === 'head') {
			return '<script src="https://js.stripe.com/v3/"></script>';
		}

	},

};
