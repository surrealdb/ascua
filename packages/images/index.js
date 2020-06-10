'use strict';

const Plugin = require('./plugin/images');
const Merger = require('broccoli-merge-trees');

const defaults = {
	jpeg: {
		quality: 85,
		progressive: true,
	},
	png: {
		progressive: true,
		compressionLevel: 9,
		adaptiveFiltering: true,
	},
	webp: {
		quality: 80,
		lossless: false,
		nearLossless: false,
	},
	tiff: {
		quality: 80,
		compression: 'jpeg',
		nearLossless: false,
	},
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		this.conf = this.project.config(process.env.EMBER_ENV);

		this.opts = this.project.config(process.env.EMBER_ENV).images;

		this.opts = Object.assign({}, defaults, this.opts);

	},

	postprocessTree(type, tree) {

		if (type !== 'all') return tree;

		let out = new Plugin([tree], this.conf, this.opts);

		return new Merger([tree, out], { overwrite: true });

	},

};
