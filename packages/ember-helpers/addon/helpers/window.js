/* global window */
import { helper } from '@ember/component/helper';

export function func() {
	return window;
}

export default helper(func);
