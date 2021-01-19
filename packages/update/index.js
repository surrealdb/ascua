'use strict';

const Plugin = require('./plugin/update');
const Merger = require('broccoli-merge-trees');

const defaults = {
	enabled: false,
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		this.conf = this.project.config(app.env);

		this.opts = this.project.config(app.env).update;

		this.opts = Object.assign({}, defaults, this.opts);

		// Ensure specific files are ignored
		app.options.fingerprint = app.options.fingerprint || {};
		app.options.fingerprint.exclude = app.options.fingerprint.exclude || [];
		app.options.fingerprint.exclude.push('version.txt');

	},

	postprocessTree(type, tree) {

		if (type !== 'all') return tree;

		let out = new Plugin([tree], this.conf, this.opts);

		return new Merger([tree, out], { overwrite: true });

	},

};
