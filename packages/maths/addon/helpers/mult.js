import { helper } from '@ember/component/helper';

export function mult(params) {
	return params.reduce((a, b) => a * b);
}

export default helper(mult);
