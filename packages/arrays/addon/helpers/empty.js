import { helper } from '@ember/component/helper';

export function empty([value]) {
	return [].concat(value).length === 0;
}

export default helper(empty);
