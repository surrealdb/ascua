import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/twitter-pixel';

const src = 'script[src*="twitter"]';

export default class extends Metric {

	name = 'twitter-pixel';

	init() {

		super.init(...arguments);

		if (window.twq) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
			case true:
				script.optimised(this.config);
				break;
			default:
				script.original(this.config);
				break;
		}

		window.twq('config', this.config.id);

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.twq;
		delete window._twq;

	}

	clear() {

		if (!window.twq) return;

		window.twq('config', this.config.id);

	}

	identify(id, data) {

		if (!window.twq) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		window.twq('config', this.config.id, { external_id: id, ...data });

	}

	trackPage(data) {

		if (!window.twq) return;

		window.twq('event', 'PageView', data);

	}

	trackEvent(name, data) {

		if (!window.twq) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		window.twq('event', name, data);

	}

}
