import { helper } from '@ember/component/helper';
import array from '../utils/array';

export function compact([value]) {
	return array(value).compact();
}

export default helper(compact);
