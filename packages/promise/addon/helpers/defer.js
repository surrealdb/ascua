import Helper from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';
import { getOwner } from '@ember/application';

export default class extends Helper {

	@tracked value = undefined;

	get fastboot() {
		return getOwner(this).lookup('service:fastboot');
	}

	compute([promise]) {

		if (this.fastboot && this.fastboot.isFastBoot) {
			this.fastboot.deferRendering(promise);
		}

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
