import { helper } from '@ember/component/helper';

export function ix(params) {
	return params.every(p => p !== true);
}

export default helper(ix);
