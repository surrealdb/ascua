import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/google-tag-manager';

const src = 'script[src*="googletagmanager"]';

export default class extends Metric {

	name = 'google-tag-manager';

	init() {

		super.init(...arguments);

		if (window.gt) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
		case true:
			script.optimised();
			break;
		default:
			script.original();
			break;
		}

		window.gt = function(data) { window.dataLayer.push(data); };

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.dataLayer;

		delete window.gt;

	}

	clear() {

		if (!window.gt) return;

		window.gt({ 'event': 'clear' });

	}

	identify(id) {

		if (!window.gt) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		window.gt({ 'event': 'identify', 'userId': id });

	}

	trackEvent(name, data) {

		if (!window.gt) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		let event = Object.assign({}, data, {
			event: name,
		});

		window.gt(event);

	}

}
