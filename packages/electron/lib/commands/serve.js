'use strict';

const electron = require("electron");
const Spawner = require("child_process").spawn;
const Command = require('ember-cli/lib/commands/serve');

module.exports = Command.extend({

	name: 'electron:serve',

	description: 'Serves your app and launches Electron.',

	run(opts) {

		process.env.EMBER_CLI_ELECTRON = true;

		process.env.EMBER_ELECTRON_LOCATION = `http://localhost:${opts.port}`;

		let build = this._super(...arguments);

		let spawn = new Promise( (resolve, reject) => {

			let app = Spawner(electron, ['electron/main.js'], {
				env: process.env,
				stdio: 'inherit',
				shell: true,
			});

			app.on('exit', () => {
				resolve();
			});

		});

		return Promise.race([build, spawn]);

	},

});
