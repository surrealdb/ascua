import Helper from '@ember/component/helper';
import { observer } from '@ember/object';

export default Helper.extend({

	value: null,

	promise: null,

	changed: observer('value', function() {
		this.recompute();
	}),

	compute([promise]) {

		if (promise === this.promise) {
			return this.get('value');
		}

		this.promise = promise;

		this.process(promise);

		return this.get('value');

	},

	async process(promise) {

		try {

			let value = await promise;

			this.set('value', value);

		} catch(e) {

			// Helper is no longer being rendered

		}

	},

});
