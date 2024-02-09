import Metric from './base';
import script from '@ascua/metrics/utils/clarity';

const src = 'script[src*="clarity"]';

export default class extends Metric {

	name = 'clarity';

	init() {

		super.init(...arguments);

		if (window.clarity) return;

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

	}

}
