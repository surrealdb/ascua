import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';

export function includes([needle, haystack]) {
	if ( isArray(needle) ) {
		return [].concat(needle).every(item => {
			return [].concat(haystack).includes(item);
		});
	} else {
		return [].concat(haystack).includes(needle);
	}
}

export default helper(includes);
