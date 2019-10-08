'use strict';

const Builder = require("electron-builder");
const Command = require('ember-cli/lib/commands/build');

module.exports = Command.extend({

	name: 'electron:build',

	description: 'Builds and packages your app using Electron.',

	init() {

		this.availableOptions.push({
			name: 'mac',
			type: Array,
			default: undefined,
			description: 'Build targets for macOS, accepts target list (see https://goo.gl/5uHuzj)',
		});

		this.availableOptions.push({
			name: 'win',
			type: Array,
			default: undefined,
			description: 'Build targets for Windows, accepts target list (see https://goo.gl/jYsTEJ)',
		});

		this.availableOptions.push({
			name: 'linux',
			type: Array,
			default: undefined,
			description: 'Build targets for Linux, accepts target list (see https://goo.gl/4vwQad)',
		});

		this.availableOptions.push({
			name: 'publish',
			type: String,
			default: 'never',
			aliases: ['p'],
			description: 'Publish using the specified options: [onTag, onTagOrDraft, always, never]',
		});

		this._super(...arguments);

	},

	run(options) {

		process.env.EMBER_CLI_ELECTRON = true;

		return this._super(...arguments).then( () => {

			return Builder.build({
				mac: options.mac,
				win: options.win,
				linux: options.linux,
				publish: options.publish,
				config: {
					asar: true,
					directories: {
						output: "tmp/electron",
					},
					extraMetadata: {
						main: "electron/main.js",
					},
					files: [
						"dist/**",
						"electron/**/*.js",
					],
					dmg: {
						background: 'electron/dmg/back.tiff',
						iconSize: 120,
						internetEnabled: true,
						title: "${productName}",
						contents: [
							{ x: 175, y: 340 },
							{ x: 485, y: 340, type: 'link', path: '/Applications' },
						],
					},
					mac: {
						darkModeSupport: true,
						icon: 'electron/mac/icon.png',
					},
					win: {
						icon: 'electron/win/icon.png',
					},
				},
			});

		});

	},

});
