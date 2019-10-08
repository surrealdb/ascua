import { uniq } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import { observer, get, defineProperty, set } from '@ember/object';
import { A } from '@ember/array';
import Helper from '@ember/component/helper';
import { guidFor } from '@ember/object/internals';

const id = (array) => `__array-${guidFor(array)}`;

export default Helper.extend({

	compute([...arrays]) {
		this.set('arrays', arrays.map(array => {
			return A(array).toArray();
		}));
		return this.get('content');
	},

	changed: observer('content.[]', function() {
		this.recompute();
	}),

	arraysDidChange: observer('arrays.[]', function() {

		let arrs = get(this, 'arrays');
		let deps = arrs.map(id);

		if ( isEmpty(arrs) ) {
			defineProperty(this, 'content', []);
			return;
		}

		arrs.forEach(arr => set(this, id(arr), arr));

		defineProperty(this, 'content', uniq(...deps));

	}),

});
