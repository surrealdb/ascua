/* global document */
import { helper } from '@ember/component/helper';

export function func() {
	return document;
}

export default helper(func);
