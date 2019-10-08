import { isArray } from '@ember/array';
import { map, mapBy } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import { observer, get, defineProperty } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([param, array]) {

		if ( isArray(param) ) {
			array = param;
			param = undefined;
		}

		if ( !isArray(array) ) {
			array = [];
		}

		this.set('param', param);
		this.set('array', array);

		return this.get('content');

	},

	changed: observer('content', function() {
		this.recompute();
	}),

	pathDidChange: observer('param', function() {

		let param = get(this, 'param');

		if ( isEmpty(param) ) {
			defineProperty(this, 'content', map('array', v => v));
			return;
		}

		if (typeof param === 'function') {
			defineProperty(this, 'content', map('array', param));
			return;
		} else {
			defineProperty(this, 'content', mapBy('array', param));
			return;
		}

	}),

});
