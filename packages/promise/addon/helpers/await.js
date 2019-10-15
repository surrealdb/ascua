import Helper from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';
import { observe } from '@ascua/decorators';

export default class extends Helper {

	@tracked value = undefined;

	@observe('value') changed() {
		this.recompute();
	}

	compute([promise]) {

		if (promise === this.promise) {
			return this.value;
		}

		this.promise = promise;

		this.process(promise);

		return this.value;

	}

	async process(promise) {
		try {
			let value = await promise;
			this.value = value;
		} catch(e) {
			// Helper is no longer being rendered
		}
	}

}
