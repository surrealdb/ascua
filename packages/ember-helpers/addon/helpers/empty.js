import { observer } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	changed: observer('array.[]', function() {
		this.recompute();
	}),

	compute([array]) {
		this.set('array', array);
		return this.get('array.length') === 0;
	},

});
