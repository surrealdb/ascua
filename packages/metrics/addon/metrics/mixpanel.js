import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/mixpanel';

const src = 'script[src*="mixpanel"]';

export default class extends Metric {

	name = 'mixpanel';

	init() {

		super.init(...arguments);

		if (window.mixpanel) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
		case true:
			script.optimised(this.config);
			break;
		default:
			script.original(this.config);
			break;
		}

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.mixpanel;

	}

	clear() {

		if (!window.mixpanel) return;

		window.mixpanel.reset();

	}

	identify(id, data) {

		if (!window.mixpanel) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		window.mixpanel.identify(id);

		window.mixpanel.people.set(data);

	}

	trackPage(data) {

		if (!window.mixpanel) return;

		window.mixpanel.track('Page view', data);

	}

	trackEvent(name, data) {

		if (!window.mixpanel) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		window.mixpanel.track(name, data);

	}

}
