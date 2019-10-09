'use strict';

const Plugin = require('broccoli-plugin');
const Sharp = require('sharp');
const RSVP = require('rsvp');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

const IMAGES = [
	'**/*.jpeg',
	'**/*.jpg',
	'**/*.png',
	'**/*.tiff',
	'**/*.webp',
];

module.exports = class Images extends Plugin {

	constructor(inputNodes, conf, opts) {

		super(inputNodes, {
			name: 'Images',
		});

		this.conf = conf;
		this.opts = opts;

	}

	build() {

		const promises = [];

		const images = this.find(IMAGES);

		images.forEach(image => {

			let i = path.join(this.inputPaths[0], image);
			let o = path.join(this.outputPath, image);
			let f = path.dirname(o);
			let e = path.extname(o);

			let p = this.sharp(f, i, o, e);

			promises.push(p);

		});

		return RSVP.all(promises);

	}

	sharp(f, i, o, e) {

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

	find(globs) {

		let files = [];

		this.inputPaths.forEach(path => {
			globs.forEach(patt => {
				glob.sync(patt, { cwd: path, nodir: true }).forEach(file => {
					if (files.indexOf(file) === -1) {
						files.push(file);
					}
				});
			});
		});

		return files;

	}

};
