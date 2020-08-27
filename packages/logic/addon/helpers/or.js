import { helper } from '@ember/component/helper';

export function or(params) {
	for (let param of params) {
		if (param) return param;
	}
	return params[0];
}

export default helper(or);
