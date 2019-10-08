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

		this._super.included.apply(this, arguments);

		this.conf = this.project.config(this.app.env);

		this.opts = this.project.config(this.app.env).minify;

		this.opts = Object.assign({}, defaults, this.opts);

	},

	postprocessTree(type, tree) {

		if (type !== 'all') return tree;

		if (this.app.env !== 'production') return tree;

		let out = new Plugin(tree, this.conf, this.opts);

		return new Merger([tree, out], { overwrite: true });

	},

};
