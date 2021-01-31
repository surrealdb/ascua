import { helper } from '@ember/component/helper';

export function augment([value], props) {
	return { ...props, ...value };
}

export default helper(augment);
