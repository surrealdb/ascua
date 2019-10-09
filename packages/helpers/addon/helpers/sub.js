import { helper } from '@ember/component/helper';

export function sub(params) {
	return params.reduce((a, b) => a - b);
}

export default helper(sub);
