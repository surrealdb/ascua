import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {

	@inject router;

	compute([...params]) {
		return this.router.currentRouteName === params[0] || this.router.isActive(...params);
	}

}
