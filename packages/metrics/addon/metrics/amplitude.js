import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/amplitude';

const src = 'script[src*="amplitude"]';

export default class extends Metric {

	name = 'amplitude';

	init() {

		super.init(...arguments);

		if (window.amplitude) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
			case true:
				script.optimised(this.config);
				break;
			default:
				script.original(this.config);
				break;
		}

		window.amplitude.getInstance().init(this.config.id);

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.amplitude;

	}

	clear() {

		if (!window.amplitude) return;

		window.amplitude.getInstance().clearUserProperties();

	}

	identify(id, data) {

		if (!window.amplitude) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		window.amplitude.getInstance().setUserId(id);

		window.amplitude.getInstance().setUserProperties(data);

	}

	trackPage(data) {

		if (!window.amplitude) return;

		window.amplitude.getInstance().logEvent('page', data);

	}

	trackEvent(name, data) {

		if (!window.amplitude) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		window.amplitude.getInstance().logEvent(name, data);

	}

}
