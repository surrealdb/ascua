import { helper } from '@ember/component/helper';
import array from '../utils/array';

export function empty([value]) {
	return array(value).length === 0;
}

export default helper(empty);
