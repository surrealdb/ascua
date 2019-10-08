import { helper } from '@ember/component/helper';

export function percent(params, hash = { style: 'percent' }) {
	let options = Object.assign({}, hash);
	options.style = 'percent';
	return Number(params[0]).toLocaleString([], options);
}

export default helper(percent);
