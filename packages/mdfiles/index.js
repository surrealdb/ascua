'use strict';

const MarkdownFiles = require('./lib/files.js');
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

	folders() {

		return Object.keys(this.opts.folders).reduce((folders, name) => {
			let dir = path.join(this.app.project.root, this.opts.folders[name]);
			return fs.existsSync(dir) ? [...folders, { name, dir }] : [...folders];
		}, []);

	},

	treeForAddon(tree) {

		let folders = this.folders();

		if (folders.length > 0) {

			let files = new MarkdownFiles(folders.map(v => v.dir), {
				type: 'addon',
				folders: folders,
				rootURL: this.conf.rootURL,
				basePath: this.app.project.root,
				outputDir: 'assets',
			});

			tree = new Merger([tree, files]);

		}

		return this._super.treeForAddon.call(this, tree);

	},

	postprocessTree(type, tree) {

		if (type !== 'all') return tree;

		let folders = this.folders();

		if (folders.length > 0) {

			let files = new MarkdownFiles(folders.map(v => v.dir), {
				type: 'files',
				folders: folders,
				rootURL: this.conf.rootURL,
				basePath: this.app.project.root,
				outputDir: 'assets',
			});

			tree = new Merger([tree, files]);

		}

		return tree;

	},

};
