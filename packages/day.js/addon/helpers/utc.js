import { helper } from '@ember/component/helper';
import Moment from 'moment';

export function utc([ value = undefined ]) {
	return Moment(value).utc();
}

export default helper(utc);
