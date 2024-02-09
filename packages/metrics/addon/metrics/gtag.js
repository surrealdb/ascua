import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/gtag';

const src = 'script[src*="gtag"]';

export default class extends Metric {

	name = 'gtag';

	init() {

		super.init(...arguments);

		if (window.gtag) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
			case true:
				script.optimised(this.config);
				break;
			default:
				script.original(this.config);
				break;
		}

		window.gtag = function () { window.dataLayer.push(arguments); };

		gtag('js', new Date());

		gtag('config', 'G-J1NWM32T1V');

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.gtag;

	}

	clear() {

		if (!window.gtag) return;

		window.gtag({ 'event': 'clear' });

	}

	identify(id) {

		if (!window.gtag) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		window.gtag({ 'event': 'identify', 'userId': id });

	}

	trackEvent(name, data) {

		if (!window.gtag) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		window.gtag(name, data);

	}

}
