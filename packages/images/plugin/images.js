'use strict';

const Plugin = require('broccoli-caching-writer');
const Sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = class Images extends Plugin {

	cache = {};

	constructor(inputNodes, conf, opts) {

		super(inputNodes, {
			name: 'Images',
			cacheInclude: [
				/[^.]+.(jpeg|jpg|png|tiff|webp)/,
			],
			cacheExclude: [
				/favicon.ico/,
				/favicon.png/,
				/static\/webapp\/[^.]+.png/,
			],
		});

		this.conf = conf;
		this.opts = opts;

	}

	build() {

		const promises = [];

		// Loop through all of the images
		// and if they have been modified
		// then process and compress them.

		this.listEntries().forEach(image => {

			if (this.cache[image.relativePath] !== image.mtime) {

				this.cache[image.relativePath] = image.mtime;

				promises.push(this.sharp(image));

			}

		});

		// Wait for all of the files to
		// finished being processed before
		// processing to the next step.

		return Promise.all(promises);

	}

	sharp(image) {

		let i = path.join(image.basePath, image.relativePath);
		let o = path.join(this.outputPath, image.relativePath);
		let f = path.dirname(o);
		let e = path.extname(o);

		try {
			fs.mkdirSync(f, { recursive: true });
		} catch (e) {
			// Ignore
		}

		switch (e) {
		case '.jpeg':
			return Sharp(i).jpeg(this.opts.jpeg).toFile(o);
		case '.jpg':
			return Sharp(i).jpeg(this.opts.jpeg).toFile(o);
		case '.png':
			return Sharp(i).png(this.opts.png).toFile(o);
		case '.tiff':
			return Sharp(i).tiff(this.opts.tiff).toFile(o);
		case '.webp':
			return Sharp(i).webp(this.opts.webp).toFile(o);
		}

	}

};
