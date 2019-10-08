import { helper } from '@ember/component/helper';

export function countize([value = 0, single, plural], { count = true }) {

	let total = Number(value) || 0;

	switch (total) {
	default:
		return count ? `${total} ${plural}` : plural;
	case 1:
		return count ? `${total} ${single}` : single;
	}

}

export default helper(countize);
