import { helper } from '@ember/component/helper';

export function and(params) {
	return params.every(p => !!p);
}

export default helper(and);
