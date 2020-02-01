import { helper } from '@ember/component/helper';
import Moment from 'moment';

export function momentDiff([ value = undefined, reference = undefined ], { precision = undefined, fraction = false }) {
	return Moment(value).diff(reference, precision, fraction);
}

export default helper(momentDiff);
