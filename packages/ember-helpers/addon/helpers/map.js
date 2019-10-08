import { map } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import { observer, get, defineProperty } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([func, array]) {
		this.set('func', func);
		this.set('array', array);
		return this.get('content');
	},

	changed: observer('content', function() {
		this.recompute();
	}),

	funcDidChange: observer('func', function() {

		let func = get(this, 'func');

		if ( isEmpty(func) ) {
			defineProperty(this, 'content', []);
			return;
		}

		defineProperty(this, 'content', map('array', func));

	}),

});
