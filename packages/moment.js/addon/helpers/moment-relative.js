import { helper } from '@ember/component/helper';
import Moment from 'moment';

export function momentRelative([ value = undefined, reference = undefined ], { ignoreSuffix = false }) {
	return Moment(value).from(reference, ignoreSuffix);
}

export default helper(momentRelative);
