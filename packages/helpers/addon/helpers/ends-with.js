import { helper } from '@ember/component/helper';

export function endsWith([str, suffix]) {
	return String(str).indexOf( String(suffix), String(str).length - String(suffix).length) !== -1;
}

export default helper(endsWith);
