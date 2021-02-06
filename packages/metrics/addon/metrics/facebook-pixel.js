import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/facebook-pixel';

const src = 'script[src*="fbevents.js"]';

export default class extends Metric {

	name = 'facebook-pixel';

	init() {

		super.init(...arguments);

		if (window.fbq) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
		case true:
			script.optimised();
			break;
		default:
			script.original();
			break;
		}

		window.fbq('init', this.config.id);

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.fbq;
		delete window._fbq;

	}

	clear() {

		if (!window.fbq) return;

		window.fbq('init', this.config.id);

	}

	identify(id, data) {

		if (!window.fbq) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		window.fbq('init', this.config.id, { external_id: id, ...data });

	}

	trackPage(data) {

		if (!window.fbq) return;

		window.fbq('track', 'PageView', data);

	}

	trackEvent(name, data) {

		if (!window.fbq) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		window.fbq('track', name, data);

	}

}
