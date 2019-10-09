'use strict';

const Plugin = require('broccoli-plugin');
const fs = require('fs');
const path = require('path');

module.exports = class Version extends Plugin {

	constructor(inputNodes, conf, opts) {

		super(inputNodes, {
			name: 'Version',
		});

		this.conf = conf;
		this.opts = opts;

	}

	build() {

		// If there is a defined version
		// specified in the options, then
		// use this for the version number.

		let text = this.opts.version || new Date().getTime();

		// Write the module content to the
		// virtual config.js file so it can
		// be imported by the service worker.

		fs.writeFileSync(path.join(this.outputPath, 'version.txt'), text);

	}

};
