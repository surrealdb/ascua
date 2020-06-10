'use strict';

const Plugin = require('broccoli-caching-writer');
const XML = require('xmlbuilder');
const Sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = class Webapp extends Plugin {

	cache = {};

	constructor(inputNodes, conf, opts) {

		super(inputNodes, {
			name: 'Webapp',
			cacheInclude: [
				/favicon.ico/,
				/favicon.png/,
				/static\/webapp\/[^.]+.png/,
			],
		});

		this.conf = conf;
		this.opts = opts;

	}

	async build() {

		const promises = [];

		// Loop through all of the images
		// and if they have been modified
		// then process and compress them.

		this.listEntries().forEach(image => {

			if (this.cache[image.relativePath] !== image.mtime) {

				this.cache[image.relativePath] = image.mtime;

				if (image.relativePath === 'favicon.png') {
					promises.push(this.sharp(image, '/favicon.ico', 16));
					promises.push(this.sharp(image, '/favicon.png', 32));
				}

				if (image.relativePath === 'static/webapp/tile.png') {
					promises.push(this.sharp(image, '/static/webapp/tile-70x70.png', 70));
					promises.push(this.sharp(image, '/static/webapp/tile-144x144.png', 144));
					promises.push(this.sharp(image, '/static/webapp/tile-150x150.png', 150));
					promises.push(this.sharp(image, '/static/webapp/tile-310x310.png', 310));
				}

				if (image.relativePath === 'static/webapp/icon.png') {
					promises.push(this.sharp(image, '/static/webapp/icon-16x16.png', 16));
					promises.push(this.sharp(image, '/static/webapp/icon-32x32.png', 32));
					promises.push(this.sharp(image, '/static/webapp/icon-57x57.png', 57));
					promises.push(this.sharp(image, '/static/webapp/icon-76x76.png', 76));
					promises.push(this.sharp(image, '/static/webapp/icon-120x120.png', 120));
					promises.push(this.sharp(image, '/static/webapp/icon-128x128.png', 128));
					promises.push(this.sharp(image, '/static/webapp/icon-152x152.png', 152));
					promises.push(this.sharp(image, '/static/webapp/icon-167x167.png', 167));
					promises.push(this.sharp(image, '/static/webapp/icon-180x180.png', 180));
					promises.push(this.sharp(image, '/static/webapp/icon-192x192.png', 192));
					promises.push(this.sharp(image, '/static/webapp/icon-512x512.png', 512));
				}

			}

		});

		// Write the module content to the
		// virtual config.js file so it can
		// be imported by the service worker.

		const browser = XML.create({
			browserconfig: {
				msapplication: {
					tile: {
						square70x70logo: { '@src': `${this.conf.rootURL}static/webapp/tile-70x70.png` },
						square144x144logo: { '@src': `${this.conf.rootURL}static/webapp/tile-144x144.png` },
						square150x150logo: { '@src': `${this.conf.rootURL}static/webapp/tile-150x150.png` },
						square310x310logo: { '@src': `${this.conf.rootURL}static/webapp/tile-310x310.png` },
						TileColor: { '#text': this.opts.color },
					},
				},
			},
		}).end();

		fs.writeFileSync(path.join(this.outputPath, 'browserconfig.xml'), browser);

		// Write the module content to the
		// virtual config.js file so it can
		// be imported by the service worker.

		const manifest = JSON.stringify({
			background_color: this.opts.background,
			description: this.opts.description,
			display: this.opts.display,
			name: this.opts.name,
			orientation: this.opts.orientation,
			scope: this.opts.scope,
			short_name: this.opts.short,
			start_url: this.opts.start,
			theme_color: this.opts.color,
			icons: [
				{ src: `${this.conf.rootURL}static/webapp/icon-16x16.png`, sizes: '16x16' },
				{ src: `${this.conf.rootURL}static/webapp/icon-32x32.png`, sizes: '32x32' },
				{ src: `${this.conf.rootURL}static/webapp/icon-192x192.png`, sizes: '192x192' },
				{ src: `${this.conf.rootURL}static/webapp/icon-512x512.png`, sizes: '512x512' },
			]
		});

		fs.writeFileSync(path.join(this.outputPath, 'manifest.json'), manifest);

		// Wait for all of the files to
		// finished being processed before
		// processing to the next step.

		return Promise.all(promises);

	}

	sharp(image, output, size) {

		let i = path.join(image.basePath, image.relativePath);
		let o = path.join(this.outputPath, output);
		let f = path.dirname(o);

		try {
			fs.mkdirSync(f, { recursive: true });
		} catch (e) {
			// Ignore
		}

		return Sharp(i).resize(size, size).toFile(o);

	}

};
