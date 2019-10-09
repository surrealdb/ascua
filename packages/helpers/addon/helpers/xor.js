import { helper } from '@ember/component/helper';

export function xor(params) {
	return params[0] && !params[1] || !params[0] && params[1];
}

export default helper(xor);
