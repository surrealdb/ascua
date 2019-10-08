import { filter } from '@ember/object/computed';
import { isEmpty, isPresent } from '@ember/utils';
import { observer, get, defineProperty } from '@ember/object';
import { isArray } from '@ember/array';
import Helper from '@ember/component/helper';

export default Helper.extend({

	compute([path, value, array]) {

		if ( !isArray(array) && isArray(value) ) {
			array = value;
			value = undefined;
		}

		this.set('path', path);
		this.set('value', value);
		this.set('array', array);

		return this.get('content');

	},

	changed: observer('content', function() {
		this.recompute();
	}),

	pathDidChange: observer('path', 'value', function() {

		let func = () => null;
		let path = get(this, 'path');
		let value = get(this, 'value');

		if ( isEmpty(path) ) {
			defineProperty(this, 'content', []);
			return;
		}

		if ( isPresent(value) ) {
			if (typeof value === 'function') {
				func = (item) => value( get(item, path) );
			} else {
				func = (item) => get(item, path) === value;
			}
		} else {
			func = (item) => isPresent( get(item, path) );
		}

		defineProperty(this, 'content', filter(`array.@each.${path}`, func));

	}),

});
