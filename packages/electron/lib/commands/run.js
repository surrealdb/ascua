'use strict';

const electron = require("electron");
const Spawner = require("child_process").spawn;
const Command = require('ember-cli/lib/models/command');

module.exports = Command.extend({

	name: 'electron:run',

	description: 'Launches your Electron app using the Ember build.',

	run() {

		process.env.EMBER_CLI_ELECTRON = true;

		return new Promise( (resolve, reject) => {

			let app = Spawner(electron, ['electron/main.js'], {
				env: process.env,
				stdio: 'inherit',
				shell: true,
			});

			app.on('exit', () => {
				resolve();
			});

		});

	},

});
