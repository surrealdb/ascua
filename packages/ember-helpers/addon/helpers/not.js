import { helper } from '@ember/component/helper';

export function not(params) {
	return params.every(p => !p);
}

export default helper(not);
