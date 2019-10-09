import { helper } from '@ember/component/helper';

export function mod(params) {
	return params.reduce((a, b) => a % b);
}

export default helper(mod);
