import { uniqBy } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import { observer, get, defineProperty } from '@ember/object';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([path, array]) {
		this.set('path', path);
		this.set('array', array);
		return this.get('content');
	},

	changed: observer('content', function() {
		this.recompute();
	}),

	pathDidChange: observer('path', function() {

		let path = get(this, 'path');

		if ( isEmpty(path) ) {
			defineProperty(this, 'content', []);
			return;
		}

		defineProperty(this, 'content', uniqBy('array', path));

	}),

});
