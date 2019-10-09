import { isArray, A } from '@ember/array';
import { observer, computed, get } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([needle, haystack]) {
		this.set('needle', needle);
		this.set('haystack', haystack);
		return this.get('content');
	},

	changed: observer('content', function() {
		this.recompute();
	}),

	content: computed('needle.[]', 'haystack.[]', function() {

		let needle = get(this, 'needle');
		let haystack = get(this, 'haystack');

		if ( !isArray(haystack) ) {
			return false;
		}

		if ( isArray(needle) && get(needle, 'length') ) {
			return needle.every( item => A(haystack).includes(item) );
		} else {
			return A(haystack).includes(needle);
		}

	}).readOnly(),

});
