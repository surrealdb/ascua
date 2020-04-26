'use strict';

const Plugin = require('broccoli-caching-writer');
const fs = require('fs');
const path = require('path');

module.exports = class Update extends Plugin {

	constructor(inputNodes, conf, opts) {

		super(inputNodes, {
			name: 'Update',
		});

		this.conf = conf;
		this.opts = opts;

	}

	build() {

		// If there is a defined version
		// specified in the options, then
		// use this for the version number.

		let text = String( this.opts.version || new Date().getTime() );

		// Write the module content to the
		// virtual config.js file so it can
		// be imported by the service worker.

		fs.writeFileSync(path.join(this.outputPath, 'version.txt'), text);

	}

};
