import { helper } from '@ember/component/helper';
import Date from 'moment';

export function date([ value = undefined ]) {
	return Date(value);
}

export default helper(date);
