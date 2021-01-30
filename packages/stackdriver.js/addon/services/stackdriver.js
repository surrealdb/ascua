import Service from '@ember/service';
import Reporter from 'stackdriver.js';
import config from '@ascua/config';
import { assert } from '@ember/debug';

const defaults = {
	enabled: true,
	service: 'web',
	environments: ['production'],
	reportUncaughtExceptions: true,
	reportUnhandledPromiseRejections: true,
};

function enabled() {
	try {
		if (typeof FastBoot !== 'undefined') throw "exception";
		if (!window) throw "exception";
		if (Reporter === null) throw "exception";
		return true;
	} catch (e) {
		return false;
	}
}

export default class extends Service {

	#config = undefined;

	#handler = undefined;

	constructor() {

		super(...arguments);

		if (enabled() === false) return;

		// Get the configuration options
		// which have been specified in the
		// app environment config file.

		this.#config = Object.assign({}, defaults, config.stackdriver);

		// Ensure that the project id, and
		// the api key have been defined
		// in the application config.

		assert(
			'Set the `stackdriver.key` property in your environment config as a string',
			this.#config.key !== undefined,
		);

		assert(
			'Set the `stackdriver.projectId` property in your environment config as a string',
			this.#config.projectId !== undefined,
		);

		// Check that the stackdriver.js
		// service is enabled depending
		// on the environment we are in.

		if (this.#config.enabled === true) {
			this.#config.enabled = this.#config.environments.includes(config.environment);
		}

		// If we are allowed to run in
		// this environment, then let's
		// create a new Reporter instance.

		if (this.#config.enabled === true) {
			this.#handler = new Reporter();
			this.#handler.start(this.#config);
		}

	}

	report(e) {

		if (enabled() === false) return;

		if (this.#config.enabled === true) {
			this.#handler.report(e);
		}

	}

}
