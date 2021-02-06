import Metric from './base';
import { assert } from '@ember/debug';
import script from '@ascua/metrics/utils/google-analytics';

const src = 'script[src*="google-analytics"]';

export default class extends Metric {

	name = 'google-analytics';

	init() {

		super.init(...arguments);

		if (window.ga) return;

		if (!this.config.id) return;

		switch (this.config.optimised) {
		case true:
			script.optimised();
			break;
		default:
			script.original();
			break;
		}

		window.ga('create', this.config.id, 'auto');

		if (this.config.trace === true) {
			window.ga_debug = { trace: true };
		}

		if (this.config.sendHitTask === false) {
			window.ga('set', 'sendHitTask', null);
		}

		if (this.config.require) {
			[].concat(this.config.require).forEach(plugin => {
				window.ga('require', plugin);
			});
		}

	}

	willDestroy() {

		document.querySelectorAll(src).forEach(e => {
			e.parentElement.removeChild(e);
		});

		delete window.ga;

	}

	clear() {

		if (!window.ga) return;

		window.ga('set', 'userId', null);

	}

	identify(id) {

		if (!window.ga) return;

		assert(`You must pass an 'id' as the first argument to ${this.toString()}:identify()`, id);

		window.ga('set', 'userId', id);

	}

	trackPage(data) {

		if (!window.ga) return;

		let event = Object.assign({}, data, {
			hitType: 'pageview',
		});

		window.ga('set', 'page', location.pathname);

		window.ga('send', event);

	}

	trackEvent(name, data) {

		if (!window.ga) return;

		assert(`You must pass a 'name' as the first argument to ${this.toString()}:trackEvent()`, name);

		let defaults = { eventCategory: 'Undefined' };

		let event = Object.assign({}, defaults, data, {
			hitType: 'event',
			eventAction: name,
		});

		window.ga('send', event);

	}

}
