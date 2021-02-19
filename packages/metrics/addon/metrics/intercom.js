import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/intercom';

const src = 'script[src*="intercom"]';

export default class extends Metric {

	name = 'intercom';

	init() {

		super.init(...arguments);

		if (window.Intercom) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
		case true:
			script.optimised(this.config);
			break;
		default:
			script.original(this.config);
			break;
		}

		window.Intercom('boot', { app_id: this.config.id });

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.Intercom;

	}

	clear() {

		if (!window.Intercom) return;

		window.Intercom('shutdown');

	}

	identify(id, data) {

		if (!window.Intercom) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		let event = Object.assign({}, data, {
			user_id: id,
		});

		window.Intercom('update', event);

	}

	trackPage(data) {

		if (!window.Intercom) return;

		window.Intercom('trackEvent', 'page viewed', data);

	}

	trackEvent(name, data) {

		if (!window.Intercom) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		window.Intercom('trackEvent', name, data);

	}

}
