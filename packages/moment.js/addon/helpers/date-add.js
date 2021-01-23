import { helper } from '@ember/component/helper';
import Date from 'moment';

export function dateAdd([ value = undefined, c = undefined, t = undefined ], options = undefined) {
	if (options) {
		return Date(value).add( Object.assign({}, options) );
	} else {
		return Date(value).add(c, t);
	}
}

export default helper(dateAdd);
