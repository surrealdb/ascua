import { helper } from '@ember/component/helper';
import Moment from 'moment';

export function momentAdd([ value = undefined, c = undefined, t = undefined ], options = undefined) {
	if (options) {
		return Moment(value).add( Object.assign({}, options) );
	} else {
		return Moment(value).add(c, t);
	}
}

export default helper(momentAdd);
