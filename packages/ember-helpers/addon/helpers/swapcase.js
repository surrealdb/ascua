import { helper } from '@ember/component/helper';

export function swapcase([value='']) {
	return String(value).replace(/([a-z]+)|([A-Z]+)/g, function($0, $1){
		return ($1) ? $0.toUpperCase() : $0.toLowerCase();
	});
}

export default helper(swapcase);
