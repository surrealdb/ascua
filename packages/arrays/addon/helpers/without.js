import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';

export function without([needle, haystack]) {
	if ( isArray(needle) ) {
		return [].concat(haystack).reduce( (prev, item) => {
			return [].concat(needle).includes(item) ? prev : prev.concat(item);
		}, []);
	} else {
		return [].concat(haystack).without(needle);
	}
}

export default helper(without);
