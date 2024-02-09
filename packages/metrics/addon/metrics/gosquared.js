import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/gosquared';

const src = 'script[src*="gosquared"]';

export default class extends Metric {

	name = 'gosquared';

	init() {

		super.init(...arguments);

		if (window._gs) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
			case true:
				script.optimised(this.config);
				break;
			default:
				script.original(this.config);
				break;
		}

		window._gs(this.config.id, false);

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window._gs;

	}

	identify(id, data) {

		if (!window._gs) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		let event = Object.assign({}, data, {
			id: id,
		});

		window._gs('identify', event);

	}

	trackPage(data) {

		if (!window._gs) return;

		window._gs('track');

	}

	trackEvent(name, data) {

		if (!window._gs) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		window._gs('event', name, data);

	}

}
