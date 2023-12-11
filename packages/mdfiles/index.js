'use strict';

const MarkdownResolver = require('broccoli-markdown-resolver');
const Merger = require('broccoli-merge-trees');
const path = require('path');
const fs = require('fs');

const defaults = {
	folders: {},
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		this.conf = this.project.config(process.env.EMBER_ENV);

		this.opts = this.project.config(process.env.EMBER_ENV).mdfiles;

		this.opts = Object.assign({}, defaults, this.opts);

	},

	treeForAddon(tree) {

		let folders = Object.keys(this.opts.folders).reduce((folders, key) => {
			return [...folders, this.opts.folders[key]];
		}, []);

		let paths = folders.reduce((paths, folder) => {
			let dirpath = path.join(this.app.project.root, folder);
			return fs.existsSync(dirpath) ? [...paths, dirpath] : [...paths];
		}, []);

		if (paths.length > 0) {
			let files = new MarkdownResolver(paths, {
				basePath: this.app.project.root,
				outputFile: 'files.js',
				trimExtensions: true,
			});
			tree = new Merger([tree, files]);
		}

		return this._super.treeForAddon.call(this, tree);

	},

};
