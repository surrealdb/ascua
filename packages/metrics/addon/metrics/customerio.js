import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/customerio';

const src = 'script[src*="customer"]';

export default class extends Metric {

	name = 'customer';

	init() {

		super.init(...arguments);

		if (window._cio) return;

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

		delete window._cio;

	}

	clear() {

		if (!window._cio) return;

		window._cio.reset();

	}

	identify(id, data) {

		if (!window._cio) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		let event = Object.assign({}, data, {
			user_id: id,
		});

		window._cio.identify(event);

	}

	trackPage(data) {

		if (!window._cio) return;

		window._cio.page(undefined, data);

	}

	trackEvent(name, data) {

		if (!window._cio) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		window._cio.track(name, data);

	}

}
