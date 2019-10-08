import { helper } from '@ember/component/helper';

export function lcwords([value='']) {
	return String(value).split(' ').map(word => {
		return word.charAt(0).toLowerCase() + word.substring(1);
	}).join(' ');
}

export default helper(lcwords);
