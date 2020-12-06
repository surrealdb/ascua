import { helper } from '@ember/component/helper';
import Date from 'dayjs';

export function momentRelative([ value = undefined, reference = undefined ], { ignoreSuffix = false }) {
	return Date(value).from(reference, ignoreSuffix);
}

export default helper(momentRelative);
