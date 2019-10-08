import { isEmpty } from '@ember/utils';
import {
  observer,
  get,
  defineProperty,
  set,
  computed
} from '@ember/object';
import Helper from '@ember/component/helper';
import { guidFor } from '@ember/object/internals';

const cp = (key) => `${key}.[]`;
const id = (array) => `__array-${guidFor(array)}`;

export default Helper.extend({

	compute([...arrays]) {
		this.set('arrays', arrays.map(array => {
			return [].concat(array);
		}));
		return this.get('content');
	},

	changed: observer('content.[]', function() {
		this.recompute();
	}),

	arraysDidChange: observer('arrays.[]', function() {

		let arrs = get(this, 'arrays');
		let deps = arrs.map(id).map(cp);

		if ( isEmpty(arrs) ) {
			defineProperty(this, 'content', []);
			return;
		}

		arrs.forEach(arr => set(this, id(arr), arr));

		defineProperty(this, 'content', computed(...deps, function() {
			let arrays = deps.map(key => {
				return get(this, key);
			});
			return [].concat( ...arrays.reverse() );
		}));

	}),

});
