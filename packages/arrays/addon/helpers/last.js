import { helper } from '@ember/component/helper';

export function last([value]) {
	return [].concat(value).objectAt(
		[].concat(value).length - 1
	);
}

export default helper(last);
