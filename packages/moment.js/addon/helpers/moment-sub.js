import { helper } from '@ember/component/helper';
import Moment from 'moment';

export function momentSub([ value = undefined, c = undefined, t = undefined ], options = undefined) {
	if (options) {
		return Moment(value).subtract( Object.assign({}, options) );
	} else {
		return Moment(value).subtract(c, t);
	}
}

export default helper(momentSub);
