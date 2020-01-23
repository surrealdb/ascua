import { helper } from '@ember/component/helper';

export function flatten([array]) {
	return [].concat.apply([], array);
}

export default helper(flatten);
