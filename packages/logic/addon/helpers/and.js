import { helper } from '@ember/component/helper';

export function and(params) {
	for (let param of params) {
		if (!param) return param;
	}
	return params[params.length-1];
}

export default helper(and);
