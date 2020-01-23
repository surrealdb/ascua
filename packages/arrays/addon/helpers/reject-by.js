import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';

export function rejectBy([param, value, array]) {

	if ( !isArray(array) && isArray(value) ) {
		array = value;
		value = undefined;
	}

	if ( isEmpty(param) ) {
		return [];
	}

	if ( !isArray(array) ) {
		return [];
	}

	switch (true) {
	case typeof param === 'function':
		return array.reject(param);
	case value === undefined:
		return array.rejectBy(param);
	default:
		return array.rejectBy(param, value);
	}

}

export default helper(rejectBy);
