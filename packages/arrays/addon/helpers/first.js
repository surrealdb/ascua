import { helper } from '@ember/component/helper';
import array from '../utils/array';

export function first([value]) {
	return array(value).objectAt(0);
}

export default helper(first);
