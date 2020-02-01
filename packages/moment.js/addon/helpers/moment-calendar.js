import { helper } from '@ember/component/helper';
import Moment from 'moment';

export function momentCalendar([ value = undefined, reference = undefined ], { format = undefined }) {
	return Moment(value).calendar(reference, format);
}

export default helper(momentCalendar);
