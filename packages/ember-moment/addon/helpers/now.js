import { helper } from '@ember/component/helper';
import Moment from 'moment';

export function now() {
	return Moment();
}

export default helper(now);
