import { helper } from '@ember/component/helper';

export function lowercase([value='']) {
	return String(value).toLowerCase();
}

export default helper(lowercase);
