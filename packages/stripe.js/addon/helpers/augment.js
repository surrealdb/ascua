import { helper } from '@ember/component/helper';

export function stripeElements([value], props) {
	return { ...props, ...value };
}

export default helper(stripeElements);
