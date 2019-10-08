import { isEmpty } from '@ember/utils';
import { observer, computed, get } from '@ember/object';
import { isArray, A } from '@ember/array';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([path, value, array]) {

		if ( !isArray(array) && isArray(value) ) {
			array = value;
			value = true;
		}

		this.set('path', path);
		this.set('value', value);
		this.set('array', array);

		return this.get('content');

	},

	changed: observer('content', function() {
		this.recompute();
	}),

	content: computed('path', 'array.[]', function() {

		let path = get(this, 'path');
		let value = get(this, 'value');
		let array = get(this, 'array');

		if ( isEmpty(path) ) {
			return false;
		}

		if ( !isArray(array) ) {
			return false;
		}

		return A(array).isEvery(path, value);

	}).readOnly(),

});
