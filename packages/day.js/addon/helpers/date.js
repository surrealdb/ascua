import { helper } from '@ember/component/helper';
import Date from 'dayjs';

export function date([ value = undefined ]) {
	return Date(value);
}

export default helper(date);
