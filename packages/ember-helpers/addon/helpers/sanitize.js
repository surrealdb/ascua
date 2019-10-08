import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function sanitize([value]) {
	return htmlSafe(value);
}

export default helper(sanitize);
