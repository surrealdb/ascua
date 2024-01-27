'use strict';

const Plugin = require('broccoli-caching-writer');
const frontmatter = require('front-matter');
const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');

module.exports = class Trees extends Plugin {

	constructor(inputNodes, opts) {

		super(inputNodes);

		this.opts = opts;

	}

	build() {

		let output = Array.prototype.reduce.call(this.inputPaths, (trees, dir) => {
			let folder = this.opts.folders.find(v => v.dir === dir);
			trees[folder.name] = this.readDirectory(folder.name, dir);
			return trees;
		}, {});

		if (this.opts.type === 'addon') {

			let output = this.opts.folders.reduce((list, folder) => {
				list[folder.name] = path.join(this.opts.outputDir, folder.name);
				return list;
			}, {});
			let buffer = `export default ${JSON.stringify(output)}`;
			fs.writeFileSync(path.join(this.outputPath, 'files.js'), buffer);

		}

		if (this.opts.type === 'files') {

			for (const [name, entries] of Object.entries(output)) {

				// Write the index.json file contents

				let buffer = JSON.stringify(entries.map(v => {
					return { name: v.name, attributes: v.attributes };
				}));
				let folder = path.join(this.outputPath, this.opts.outputDir, name);
				let file = path.join(folder, 'index.json');
				mkdirp.sync(folder);
				fs.writeFileSync(file, buffer);

				// Write the individual file contents

				for (const entry of entries) {

					let buffer = JSON.stringify(entry);
					let folder = path.join(this.outputPath, this.opts.outputDir, name);
					let file = path.join(folder, `${entry.name}.json`);
					fs.writeFileSync(file, buffer);

				}

			}

		}

	}

	readDirectory(name, dir) {

		let files = fs.readdirSync(dir);

		return Array.prototype.reduce.call(files, (tree, file) => {

			let fileExt = path.extname(file);
			let fileName = file.replace(/\.[^/.]+$/, '');
			let filePath = path.join(name, fileName);
			let fullPath = path.join(dir, file);
			let isDirectory = fs.lstatSync(path.join(dir, file)).isDirectory();

			if (isDirectory || fileExt !== '.md') { return [...tree]; }

			let content = fs.readFileSync(fullPath, { encoding: 'utf8' });
			content = frontmatter(content);

			let entry = {
				name: fileName,
				body: content.body,
				attributes: content.attributes,
			};

			return [...tree, entry];

		}, []);
	}

};
