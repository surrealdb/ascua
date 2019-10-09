import { helper } from '@ember/component/helper';

export function range([min, max]) {

	let numbers = [];

	if (max < min) {
		[min, max] = [max, min];
	}

	for (let i = min; i <= max; i++) {
		numbers.push(i);
	}

	return numbers;

}

export default helper(range);
