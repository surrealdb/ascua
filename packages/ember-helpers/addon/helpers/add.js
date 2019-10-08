import { helper } from '@ember/component/helper';

export function add(params) {
	return params.reduce((a, b) => a + b);
}

export default helper(add);
