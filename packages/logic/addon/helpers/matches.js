import { helper } from '@ember/component/helper';
import { typeOf } from '@ember/utils';

export function matches([haystack, needle], { exact = false }) {

	if (typeOf(needle) !== 'string') {
		return false;
	}

	if (typeOf(haystack) !== 'string') {
		return false;
	}

	if (haystack.length === 0 || needle.length === 0) {
		return false;
	}

	return needle.toLowerCase().split(' ').every(v => {
		switch (exact) {
		case true:
			return haystack.toLowerCase() === v;
		default:
			return haystack.toLowerCase().indexOf(v) !== -1;
		}
	});

}

export default helper(matches);
