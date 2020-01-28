import { helper } from '@ember/component/helper';
import array from '../utils/array';

export function last([value]) {
	return array(value).objectAt(
		array(value).length - 1
	);
}

export default helper(last);
