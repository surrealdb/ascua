import { helper } from '@ember/component/helper';
import Date from 'dayjs';

export function dateFormat([ value = undefined, format = undefined ]) {
	return Date(value).format(format);
}

export default helper(dateFormat);
