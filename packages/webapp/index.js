'use strict';

const Plugin = require('./plugin/webapp');
const Header = require('./plugin/header');
const Merger = require('broccoli-merge-trees');

const defaults = {
	background: '#ffffff',
	color: '#000000',
	description: '',
	display: 'standalone',
	enabled: true,
	name: '',
	orientation: 'portrait',
	scope: '/',
	short: '',
	start: '/',
	style: 'default',
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		this.conf = this.project.config(process.env.EMBER_ENV);

		this.opts = this.project.config(process.env.EMBER_ENV).webapp;

		this.opts = Object.assign({}, defaults, this.opts);

		// Ensure specific files are ignored
		app.options.fingerprint = app.options.fingerprint || {};
		app.options.fingerprint.exclude = app.options.fingerprint.exclude || [];
		app.options.fingerprint.exclude.push('favicon.ico');

	},

	postprocessTree(type, tree) {

		if (type !== 'all') return tree;

		if (process.env.EMBER_ENV !== 'production') return tree;

		let out = new Plugin([tree], this.conf, this.opts);

		return new Merger([out, tree], { overwrite: true });

	},

	contentFor(type) {

		if (type !== 'head') return;

		if (process.env.EMBER_ENV !== 'production') return;

		return Header(this.conf, this.opts);

	},

	treeForPublic(tree) {

		return tree;

	},

};
