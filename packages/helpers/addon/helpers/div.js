import { helper } from '@ember/component/helper';

export function div(params) {
	return params.reduce((a, b) => a / b);
}

export default helper(div);
