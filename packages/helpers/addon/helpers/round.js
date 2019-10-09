import { helper } from '@ember/component/helper';

export function round(params) {
	return Math.round(params[0]);
}

export default helper(round);
