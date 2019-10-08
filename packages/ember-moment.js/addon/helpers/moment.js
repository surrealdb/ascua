import { helper } from '@ember/component/helper';
import Moment from 'moment';

export function moment([ value = undefined ]) {
	return Moment(value);
}

export default helper(moment);
