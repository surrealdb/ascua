import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {

	@inject router;

	compute([path]) {
		return `${this.router.rootURL}/${path}`.replace(/\/\/+/g, '/');
	}

}
