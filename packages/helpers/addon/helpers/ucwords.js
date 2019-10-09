import { helper } from '@ember/component/helper';

export function ucwords([value='']) {
	return String(value).split(' ').map(word => {
		return word.charAt(0).toUpperCase() + word.substring(1);
	}).join(' ');
}

export default helper(ucwords);
