import { helper } from '@ember/component/helper';

export function compact([value]) {
	return [].concat(value).compact();
}

export default helper(compact);
