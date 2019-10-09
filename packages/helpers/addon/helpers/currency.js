import { helper } from '@ember/component/helper';
import symbol from '../utils/symbol';

export function currency(params) {
	return symbol(params[0]);
}

export default helper(currency);
