import { isArray, A } from '@ember/array';
import { observer } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	changed: observer('array.[]', function() {
		this.recompute();
	}),

	compute([beg, end, array]) {

		if ( !isArray(array) ) {
			return undefined;
		}

		this.set('array', array);

		return A(array).slice(beg, end);

	},

});
