'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		// Get the project rootURL
		this.base = this.project.config(process.env.EMBER_ENV).rootURL;

		// Prevent autoimport of electron
		app.options.autoImport = app.options.autoImport || {};
		app.options.autoImport.exclude = app.options.autoImport.exclude || [];
		app.options.autoImport.exclude.push('electron');

		// Check if we are in Electron
		app.import('vendor/inject.js', {
			outputFile: 'assets/electron.js'
		});

		// Import ES6 library for Electron
		app.import('vendor/import.js', {
			exports: { Electron: ['default'] }
		});

	},

	contentFor(type) {

		if (process.env.EMBER_CLI_ELECTRON) {
			if (type === 'head-footer') {
				return `<script src="${this.base}assets/electron.js"></script>`;
			}
		}

	},

	includedCommands() {

		return {
			'electron:run': require('./lib/commands/run'),
			'electron:serve': require('./lib/commands/serve'),
			'electron:build': require('./lib/commands/build'),
		};

	},

};
