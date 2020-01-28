import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';
import array from '../utils/array';

export function includes([needle, haystack]) {
	if ( isArray(needle) ) {
		return needle.every(item => {
			return array(haystack).includes(item);
		});
	} else {
		return array(haystack).includes(needle);
	}
}

export default helper(includes);
