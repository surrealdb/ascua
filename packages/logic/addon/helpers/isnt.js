import { helper } from '@ember/component/helper';

export function isnt(params) {
	return params.every(p => p !== true);
}

export default helper(isnt);
