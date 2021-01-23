import { helper } from '@ember/component/helper';
import Date from 'moment';

export function dateRelative([ value = undefined, reference = undefined ], { ignoreSuffix = false }) {
	return Date(value).from(reference, ignoreSuffix);
}

export default helper(dateRelative);
