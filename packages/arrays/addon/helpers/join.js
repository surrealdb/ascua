import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';

export function join([separator, ...array]) {

	if ( isArray(separator) ) {
		array = separator;
		separator = " ";
	}

	return [].concat.apply([], array).join(separator);

}

export default helper(join);
