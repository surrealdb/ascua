import { helper } from '@ember/component/helper';

export function uppercase([value='']) {
	return String(value).toUpperCase();
}

export default helper(uppercase);
