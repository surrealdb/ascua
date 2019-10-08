import { helper } from '@ember/component/helper';

export function number(params, hash = { style: 'decimal' }) {
	let options = Object.assign({}, hash);
	options.style = 'decimal';
	return Number(params[0]).toLocaleString([], options);
}

export default helper(number);
