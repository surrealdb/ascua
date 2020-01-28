import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';

export function objectAt([index, array]) {

	if ( !isArray(array) ) {
		return undefined;
	}

	return array.objectAt(index);

}

export default helper(objectAt);
