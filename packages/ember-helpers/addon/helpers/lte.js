import { helper } from '@ember/component/helper';

export function lte(params) {
	return params[0] <= params[1];
}

export default helper(lte);
