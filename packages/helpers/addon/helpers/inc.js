import { helper } from '@ember/component/helper';

export function inc([value, amount]) {
	return parseFloat(value) + ( parseFloat(amount) || 1 );
}

export default helper(inc);
