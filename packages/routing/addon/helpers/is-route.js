import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {

	@inject router;

	compute([route]) {
		return this.router.currentRouteName === route;
	}

}
