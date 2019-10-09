import { helper } from '@ember/component/helper';
import Moment from 'moment';

export function momentFormat([ value = undefined, format = undefined ]) {
	return Moment(value).format(format);
}

export default helper(momentFormat);
