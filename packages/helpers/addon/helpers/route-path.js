import Helper from '@ember/component/helper';
import { inject } from '@ember/service';
import { observe } from '@ascua/xenon/decorators';

export default class extends Helper {

	@inject router;

	@observe('router.currentURL') changed() {
		this.recompute();
	}

	compute() {
		return this.router.currentURL.split('?')[0] || '';
	}

}