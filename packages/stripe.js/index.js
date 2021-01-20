'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('vendor/stripe.js', {
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