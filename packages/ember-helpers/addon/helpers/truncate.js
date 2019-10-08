import { helper } from '@ember/component/helper';

export function truncate([str, length]) {
	return String(str).length > parseInt(length) ? String(str).substring( 0, parseInt(length) ) + '...' : str;
}

export default helper(truncate);
