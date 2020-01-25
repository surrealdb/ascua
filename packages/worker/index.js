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

		this._super.included(...arguments);

		this.conf = this.project.config(process.env.EMBER_ENV);

		this.opts = this.project.config(process.env.EMBER_ENV).worker;

		this.opts = Object.assign({}, defaults, this.opts);

		// Ensure specific files are ignored
		app.options.fingerprint = app.options.fingerprint || {};
		app.options.fingerprint.exclude = app.options.fingerprint.exclude || [];
		app.options.fingerprint.exclude.push('sw.js');

	},

	postprocessTree(type, tree) {

		if (type !== 'all') return tree;

		let pub = this.treeFor('vendor');

		let out = new Plugin([tree], this.conf, this.opts);

		let mrg = new Merger([pub, out], { overwrite: true });

		out = new Rollup(mrg, {
			rollup: {
				input: 'sw.mod.js',
				output: {
					name: 'sw',
					file: 'sw.js',
					format: 'iife',
				},
			}
		});

		out = process.env.EMBER_ENV === 'production' ? uglify(out) : out;

		return new Merger([tree, out], { overwrite: true });

	},

};
