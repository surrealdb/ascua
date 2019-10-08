import { A } from '@ember/array';
import { observer } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	changed: observer('array.[]', function() {
		this.recompute();
	}),

	compute([separator, ...array]) {
		this.set('array', array);
		return A(array).reduce( (words, other) => words.concat(other) ).join(separator);
	},

});
