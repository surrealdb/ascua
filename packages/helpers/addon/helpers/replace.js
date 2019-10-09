import { helper } from '@ember/component/helper';

export function replace([value='', search='', replace='']) {
	return String(value).replace(search, replace);
}

export default helper(replace);
