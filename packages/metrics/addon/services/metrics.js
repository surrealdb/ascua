import Service from '@ember/service';
import { inject } from '@ember/service';

export default class extends Service {

	@inject router;

	constructor() {

		super(...arguments);

		this.router.on('routeDidChange', () => {
			this.metrics.forEach(m => {
				m.trackPage();
			});
		});

	}

	clear(n) {
		switch (arguments.length) {
		case 1:
			if (this[`metric:${n}`]) {
				return this[`metric:${n}`].clear();
			}
		case 0:
			return this.metrics.forEach(m => {
				m.clear();
			});
		}
	}

	identify(n, id, data) {
		switch (arguments.length) {
		case 3:
			if (this[`metric:${n}`]) {
				return this[`metric:${n}`].identify(id, data);
			}
		case 2:
			return this.metrics.forEach(m => {
				m.identify(...arguments);
			});
		}
	}

	trackPage(n, data) {
		switch (arguments.length) {
		case 2:
			if (this[`metric:${n}`]) {
				return this[`metric:${n}`].trackPage(data);
			}
		case 1:
			return this.metrics.forEach(m => {
				m.trackPage(...arguments);
			});
		}
	}

	trackEvent(n, name, data) {
		switch (arguments.length) {
		case 3:
			if (this[`metric:${n}`]) {
				return this[`metric:${n}`].trackEvent(name, data);
			}
		case 2:
			return this.metrics.forEach(m => {
				m.trackEvent(...arguments);
			});
		}
	}

}
