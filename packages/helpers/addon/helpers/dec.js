import { helper } from '@ember/component/helper';

export function dec([value, amount]) {
	return parseFloat(value) - ( parseFloat(amount) || 1 );
}

export default helper(dec);
