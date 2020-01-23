import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';

export function everyBy([thing, value, array]) {

	if ( !isArray(array) && isArray(value) ) {
		array = value;
		value = true;
	}

	if ( isEmpty(thing) ) {
		return false;
	}

	if ( !isArray(array) ) {
		return false;
	}

	switch (true) {
	case typeof thing === 'function':
		return array.every(thing);
	case value === undefined:
		return array.isEvery(thing, true);
	default:
		return array.isEvery(thing, value);
	}

}

export default helper(everyBy);
