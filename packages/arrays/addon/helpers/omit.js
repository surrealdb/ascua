import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';

export function omit([count, array]) {

	if ( !isArray(array) ) {
		return [];
	}

	return [].concat(array).slice(count);

}

export default helper(omit);
