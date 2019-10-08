'use strict';

const Plugin = require('./plugin/worker');
const Merger = require('broccoli-merge-trees');
const Rollup = require('broccoli-rollup');
const uglify = require('broccoli-uglify-sourcemap');

const defaults = {
	enabled: false,
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, arguments);

		this.conf = this.project.config(this.app.env);

		this.opts = this.project.config(this.app.env).update;

		this.opts = Object.assign({}, defaults, this.opts);

		// Ensure specific files are ignored
		app.options.fingerprint = app.options.fingerprint || {};
		app.options.fingerprint.exclude = app.options.fingerprint.exclude || [];
		app.options.fingerprint.exclude.push('sw.js');

	},

	postprocessTree(type, tree) {

		if (type !== 'all') return tree;

		let pub = this.treeFor('public');

		let out = new Plugin([tree], this.conf, this.opts);

		out = new Rollup(new Merger([pub, out]), {
			rollup: {
				input: 'sw.js',
				output: {
					name: 'sw',
					file: 'sw.js',
					format: 'iife',
				},
			}
		});

		out = this.app.env === 'production' ? uglify(out) : out;

		return new Merger([tree, out], { overwrite: true });

	},

	treeForPublic(tree) {

		return tree;

	},

};
