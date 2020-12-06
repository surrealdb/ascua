import { helper } from '@ember/component/helper';
import Date from 'moment';

export function moment([ value = undefined ]) {
	return Date(value);
}

export default helper(moment);
