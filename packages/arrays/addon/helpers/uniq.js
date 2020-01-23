import { helper } from '@ember/component/helper';

export function uniq([...array]) {
	return [].concat( [].concat.apply([], array) ).uniq();
}

export default helper(uniq);
