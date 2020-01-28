import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';

export function take([count, array]) {

	if ( !isArray(array) ) {
		return [];
	}

	return array.slice(0, count);

}

export default helper(take);
