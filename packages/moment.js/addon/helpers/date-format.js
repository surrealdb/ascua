import { helper } from '@ember/component/helper';
import Date from 'moment';

export function momentFormat([ value = undefined, format = undefined ]) {
	return Date(value).format(format);
}

export default helper(momentFormat);
