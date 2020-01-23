import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';

export function findBy([param, value, array]) {

	if ( !isArray(array) && isArray(value) ) {
		array = value;
		value = undefined;
	}

	if ( isEmpty(param) ) {
		return undefined;
	}

	if ( !isArray(array) ) {
		return undefined;
	}

	switch (true) {
	case typeof param === 'function':
		return array.find(param);
	case value === undefined:
		return array.findBy(param);
	default:
		return array.findBy(param, value);
	}

}

export default helper(findBy);
