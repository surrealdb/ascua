import { helper } from '@ember/component/helper';

export function first([value]) {
	return [].concat(value).objectAt(0);
}

export default helper(first);
