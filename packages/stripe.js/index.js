'use strict';

module.exports = {

	name: require('./package').name,

	treeForPublic(tree) {
		return tree;
	},

	contentFor(type) {
		if (type === 'head') {
			return '<link rel="preload" as="script" href="https://js.stripe.com/v3/">';
		}
	},

};
