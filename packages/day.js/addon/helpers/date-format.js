import { helper } from '@ember/component/helper';
import Date from 'dayjs';

export function momentFormat([ value = undefined, format = undefined ]) {
	return Date(value).format(format);
}

export default helper(momentFormat);
