import { helper } from '@ember/component/helper';

export function abs([value=0]) {
	return Math.abs(value);
}

export default helper(abs);
