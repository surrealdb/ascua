import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {

	@inject router;

	compute(params, hash) {
		return (...passed) => {
			passed = passed.filter(v => v instanceof Event === false);
			return this.router.transitionTo(...params, ...passed, { queryParams: hash });
		};
	}

}
