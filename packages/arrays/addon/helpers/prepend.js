import { helper } from '@ember/component/helper';

export function prepend([...arrays]) {
	return [].concat( ...arrays.reverse() );
}

export default helper(prepend);
