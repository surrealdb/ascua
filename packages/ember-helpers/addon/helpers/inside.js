import { helper } from '@ember/component/helper';

export function inside([haystack, needle]) {
	return haystack.indexOf(needle) > -1;
}

export default helper(inside);
