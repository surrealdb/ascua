import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';

export function mapBy([param, array]) {

	if ( isArray(param) ) {
		array = param;
		param = undefined;
	}

	if ( !isArray(array) ) {
		return [];
	}

	switch (true) {
	case typeof param === 'function':
		return array.map(thing);
	case isEmpty(param):
		return array.map(v => v);
	default:
		return array.mapBy(param);
	}

}

export default helper(mapBy);
