import { A } from '@ember/array';
import { isEmpty } from '@ember/utils';
import {
  observer,
  get,
  defineProperty,
  computed
} from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([func, array]) {
		this.set('func', func);
		this.set('array', array);
		return this.get('content');
	},

	changed: observer('array.[]', function() {
		this.recompute();
	}),

	funcDidChange: observer('func', function() {

		let func = get(this, 'func');

		if ( isEmpty(func) ) {
			defineProperty(this, 'content', []);
			return;
		}

		defineProperty(this, 'content', computed('array', function() {
			return A( get(this, 'array') ).find(func);
		}));

	}),

});
