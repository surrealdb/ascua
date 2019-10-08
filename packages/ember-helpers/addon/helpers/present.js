import { helper } from '@ember/component/helper';
import { isPresent } from '@ember/utils';

export function present(params) {
	return params.every(p => isPresent(p));
}

export default helper(present);
