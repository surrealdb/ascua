import { helper } from '@ember/component/helper';
import Date from 'dayjs';

export function momentDiff([ value = undefined, reference = undefined ], { precision = undefined, fraction = false }) {
	return Date(value).diff(reference, precision, fraction);
}

export default helper(momentDiff);
