import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/google-tag-manager';

const src = 'script[src*="gtm"]';

export default class extends Metric {

	name = 'google-tag-manager';

	init() {

		super.init(...arguments);

		if (window.gtm) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
			case true:
				script.optimised(this.config);
				break;
			default:
				script.original(this.config);
				break;
		}

		window.gtm = function () { window.dataLayer.push(arguments); };

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.gtm;

	}

	clear() {

		if (!window.gtm) return;

		window.gtm({ 'event': 'clear' });

	}

	identify(id) {

		if (!window.gtm) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		window.gtm({ 'event': 'identify', 'userId': id });

	}

	trackEvent(name, data) {

		if (!window.gtm) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		let event = Object.assign({}, data, {
			event: name,
		});

		window.gtm(event);

	}

}
