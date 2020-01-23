import { helper } from '@ember/component/helper';

export function union([...array]) {
	return [].concat( [].concat.apply([], array) ).uniq();
}

export default helper(union);
