import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';

export function reverse([array]) {

	if ( !isArray(array) ) {
		return [];
	}

	return [].concat(array).slice(0).reverse();

}

export default helper(reverse);
