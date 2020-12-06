import { helper } from '@ember/component/helper';
import Date from 'dayjs';

export function moment([ value = undefined ]) {
	return Date(value);
}

export default helper(moment);
