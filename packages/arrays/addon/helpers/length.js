import { helper } from '@ember/component/helper';
import array from '../utils/array';

export function length([value]) {
	return array(value).length;
}

export default helper(length);
