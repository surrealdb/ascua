import { helper } from '@ember/component/helper';

export function json([value], { spaces = 0 }) {
	return JSON.stringify(value, null, spaces);
}

export default helper(json);
