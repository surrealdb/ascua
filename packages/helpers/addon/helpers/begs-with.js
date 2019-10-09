import { helper } from '@ember/component/helper';

export function begsWith([str, prefix]) {
	return String(str).indexOf( String(prefix) ) === 0;
}

export default helper(begsWith);
