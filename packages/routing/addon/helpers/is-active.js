import Helper from '@ember/component/helper';
import { inject } from '@ember/service';
import { observe } from '@ascua/decorators';

export default class extends Helper {

	@inject router;

	@observe('router.currentRouteName') changed() {
		this.recompute();
	}

	compute([...params]) {
		return this.router.isActive(...params);
	}

}
