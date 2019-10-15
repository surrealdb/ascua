import Service from '@ember/service';
import { inject } from '@ember/service';
import { computed } from '@ember/object';

export default class extends Service {

	@inject router;

	@computed('router.currentRouteName')
	get name() {
		return this.router.currentRouteName;
	}

	@computed('router.currentURL')
	get path() {
		return this.router.currentURL.split('?')[0] || '';
	}

	@computed('router.currentURL')
	get vars() {
		return this.router.currentURL.split('?')[1] || '';
	}

	@computed('vars')
	get query() {
		return this.vars.split('&').filter(p => p).reduce( (o, p) => {
			let bit = p.split('=');
			let key = decodeURIComponent(bit[0]);
			let val = decodeURIComponent(bit[1]) || null;
			o[key] = val;
			return o;
		}, {});
	}

}
