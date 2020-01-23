import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';

export function anyBy([thing, value, array]) {

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
		return array.any(thing);
	case value === undefined:
		return array.isAny(thing, true);
	default:
		return array.isAny(thing, value);
	}

}

export default helper(anyBy);
