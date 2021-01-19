'use strict';

const Plugin = require('./plugin/minify');
const Merger = require('broccoli-merge-trees');

const defaults = {
	collapseWhitespace : true,
	removeComments : true,
	minifyCSS : true,
	minifyJS : true,
	ignoreCustomComments: [
		/^\s+EMBER_CLI_FASTBOOT_TITLE/,
		/^\s+EMBER_CLI_FASTBOOT_HEAD/,
		/^\s+EMBER_CLI_FASTBOOT_BODY/,
	]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		this.conf = this.project.config(process.env.EMBER_ENV);

		this.opts = this.project.config(process.env.EMBER_ENV).minify;

		this.opts = Object.assign({}, defaults, this.opts);

		// Ensure JS is minified
		app.options.minifyJS = app.options.minifyJS || {};
		app.options.minifyJS.enabled = process.env.EMBER_ENV === 'production';

		// Ensure CSS is minified
		app.options.minifyCSS = app.options.minifyCSS || {};
		app.options.minifyCSS.enabled = process.env.EMBER_ENV === 'production';

	},

	postprocessTree(type, tree) {

		if (type !== 'all') return tree;

		if (process.env.EMBER_ENV !== 'production') return tree;

		let out = new Plugin(tree, this.conf, this.opts);

		return new Merger([tree, out], { overwrite: true });

	},

};
