import { helper } from '@ember/component/helper';
import Date from 'dayjs';

export function momentCalendar([ value = undefined, reference = undefined ], { format = undefined }) {
	return Date(value).calendar(reference, format);
}

export default helper(momentCalendar);
