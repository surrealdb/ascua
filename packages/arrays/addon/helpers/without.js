import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';
import array from '../utils/array';

export function without([needle, haystack]) {
	if ( isArray(needle) ) {
		return array(haystack).reduce( (prev, item) => {
			return needle.includes(item) ? prev : prev.concat(item);
		}, []);
	} else {
		return array(haystack).without(needle);
	}
}

export default helper(without);
