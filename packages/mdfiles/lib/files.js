'use strict';

const Plugin = require('broccoli-caching-writer');
const frontmatter = require('front-matter');
const mkdirp = require('mkdirp');
const crypto = require('crypto');
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

			let content = this.opts.folders.reduce((list, folder) => {

				let text = JSON.stringify(output[folder.name]);
				let hash = crypto.createHash('md5').update(text).digest('hex').substring(0,6);

				list[folder.name] = path.join(
					this.opts.rootURL,
					this.opts.outputDir,
					folder.name,
					`index-${hash}.json`
				);

				return list;

			}, {});

			let buffer = `export default ${JSON.stringify(content)}`;
			fs.writeFileSync(path.join(this.outputPath, 'files.js'), buffer);

		}

		if (this.opts.type === 'files') {

			for (const [name, entries] of Object.entries(output)) {

				let text = JSON.stringify(entries);
				let hash = crypto.createHash('md5').update(text).digest('hex').substring(0,6);

				// Write the index.json file contents

				let buffer = JSON.stringify(entries.map(v => {
					return { name: v.name, path: v.path, attributes: v.attributes };
				}));
				let folder = path.join(this.outputPath, this.opts.outputDir, name);
				let file = path.join(folder, `index-${hash}.json`);
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
			let filePath = path.join(this.opts.rootURL, this.opts.outputDir, name, `${fileName}.json`);
			let fullPath = path.join(dir, file);
			let isDirectory = fs.lstatSync(path.join(dir, file)).isDirectory();

			if (isDirectory || fileExt !== '.md') { return [...tree]; }

			let content = fs.readFileSync(fullPath, { encoding: 'utf8' });
			content = frontmatter(content);

			let entry = {
				name: fileName,
				path: filePath,
				body: content.body,
				attributes: content.attributes,
			};

			return [...tree, entry];

		}, []);
	}

};
