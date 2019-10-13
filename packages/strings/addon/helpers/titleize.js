import { helper } from '@ember/component/helper';

export function titleize([value='']) {
	return String(value).toLowerCase().replace(/(?:^|\s|-|\/)\S/g, function($1) { return $1.toUpperCase(); });
}

export default helper(titleize);
