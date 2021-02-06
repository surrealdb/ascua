import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/heap';

const src = 'script[src*="heapanalytics"]';

export default class extends Metric {

	name = 'heap';

	init() {

		super.init(...arguments);

		if (window.heap) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
		case true:
			script.optimised();
			break;
		default:
			script.original();
			break;
		}

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.heap;

	}

	clear() {

		if (!window.heap) return;

		window.heap.resetIdentity();

	}

	identify(id, data) {

		if (!window.heap) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		window.heap.identify(id);

		window.heap.addUserProperties(data);

	}

	trackEvent(name, data) {

		if (!window.heap) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		window.heap.track(name, data);

	}

}
