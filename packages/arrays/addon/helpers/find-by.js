import { isEmpty, isPresent } from '@ember/utils';
import {
  observer,
  get,
  defineProperty,
  computed
} from '@ember/object';
import { isArray, A } from '@ember/array';
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

		defineProperty(this, 'content', computed(`array.@each.${path}`, function() {
			return A( get(this, 'array') ).find(func);
		}));

	}),

});
