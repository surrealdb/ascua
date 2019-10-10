'use strict';

const Plugin = require('broccoli-caching-writer');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

module.exports = class Worker extends Plugin {

	constructor(inputNodes, conf, opts) {

		super(inputNodes, {
			name: 'Worker',
		});

		this.conf = conf;
		this.opts = opts;

	}

	build() {

		let module = '';

		// Specify the name and location of
		// the index file which will used
		// for responding to offline pages.

		module += `export const INDEX = 'index.html';`;

		// If there is a defined version
		// specified in the options, then
		// use this for the version number.

		let text = this.opts.version || new Date().getTime();

		module += `export const VERSION = '${text}';`;

		// If the assets are loaded from a
		// CDN then we need to prepend the
		// asset url with the CDN location.

		if (this.opts.prepend) {
			module += `export const PREPEND = '${this.opts.prepend}';`;
		} else {
			module += `export const PREPEND = undefined;`;
		}

		// Fetch the included and excluded
		// file glob paths which will be
		// cached by the service worker.

		let paths = [];
		let specific = this.opts.specific || [];
		let includes = this.find( this.opts.includes || [] );
		let excludes = this.find( this.opts.excludes || [] );

		paths = specific.reduce( (paths, path) => paths.concat(path), paths);

		paths = includes.reduce( (paths, path) => paths.concat(path), paths);

		paths = paths.filter(path => excludes.indexOf(path) === -1);

		module += `export const PATHS = ${JSON.stringify(paths)};`;

		// Specify whether service workers
		// are enabled, so we can change
		// the sw.js file which is served.

		module += `export const ENABLED = ${JSON.stringify(this.opts.enabled)};`;

		// Write the module content to the
		// virtual config.js file so it can
		// be imported by the service worker.

		fs.writeFileSync(path.join(this.outputPath, 'config.js'), module);

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
