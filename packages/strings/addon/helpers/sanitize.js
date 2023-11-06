import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function sanitize([value]) {
	return htmlSafe(value);
}

export default helper(sanitize);
