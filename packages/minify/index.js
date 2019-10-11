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

		this._super.included(...arguments);

		this.conf = this.project.config(app.env);

		this.opts = this.project.config(app.env).minify;

		this.opts = Object.assign({}, defaults, this.opts);

		// Ensure JS is minified
		app.options.minifyJS = app.options.minifyJS || {};
		app.options.minifyJS.enabled = this.app.env === 'production';

		// Ensure CSS is minified
		app.options.minifyCSS = app.options.minifyCSS || {};
		app.options.minifyCSS.enabled = this.app.env === 'production';

	},

	postprocessTree(type, tree) {

		if (type !== 'all') return tree;

		if (this.app.env !== 'production') return tree;

		let out = new Plugin(tree, this.conf, this.opts);

		return new Merger([tree, out], { overwrite: true });

	},

};
