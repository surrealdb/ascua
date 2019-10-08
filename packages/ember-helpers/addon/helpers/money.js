import { helper } from '@ember/component/helper';

export function money(params, hash = { style: 'currency', currency: 'USD' }) {
	let options = Object.assign({}, hash);
	options.style = 'currency';
	options.currency = options.currency || 'USD';
	return Number(params[0]).toLocaleString([], options);
}

export default helper(money);
