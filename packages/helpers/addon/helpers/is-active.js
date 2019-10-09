import Helper from '@ember/component/helper';
import { inject } from '@ember/service';
import { observe } from '@abcum/ember-xenon/decorators';

export default class extends Helper {

	@inject router;

	@observe('router.currentRouteName') changed() {
		this.recompute();
	}

	compute([...params]) {
		return this.router.isActive(...params);
	}

}
