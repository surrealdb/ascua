import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/raygun';

const src = 'script[src*="raygun"]';

export default class extends Metric {

	name = 'raygun';

	init() {

		super.init(...arguments);

		if (window.rg4js) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
		case true:
			script.optimised(this.config);
			break;
		default:
			script.original(this.config);
			break;
		}

		window.rg4js('apiKey', this.config.id);
		window.rg4js('enableCrashReporting', true);
		window.rg4js('enablePulse', true);

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.rg4js;

	}

	clear() {

		if (!window.rg4js) return;

		window.rg4js('setUser', {
			isAnonymous: true,
		});

	}

	identify(id, data) {

		if (!window.rg4js) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		let event = Object.assign({}, data, {
			identifier: id,
		});

		window.rg4js('setUser', event);

	}

	trackPage() {

		if (!window.rg4js) return;

		window.rg4js('trackEvent', {
			type: 'pageView',
			path: location.pathname
		});

	}

}
