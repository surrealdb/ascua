import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';

export function slice([beg, end, array]) {

	if ( !isArray(array) ) {
		return [];
	}

	return array.slice(beg, end);

}

export default helper(slice);
