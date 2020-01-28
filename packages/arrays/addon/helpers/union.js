import { helper } from '@ember/component/helper';
import array from '../utils/array';

export function union([...value]) {
	return array( [].concat.apply([], value) ).uniq();
}

export default helper(union);
