import { helper } from '@ember/component/helper';

export function random([min = 0, max = 0]) {
	if (max < min) [min, max] = [max, min];
	return Math.floor(Math.random() * max-min) + min;
}

export default helper(random);
