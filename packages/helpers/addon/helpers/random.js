import { helper } from '@ember/component/helper';

export function random([min, max]) {
	return (params) => {
		return Math.random(params[0] || min, params[1] || max);
	};
}

export default helper(random);
