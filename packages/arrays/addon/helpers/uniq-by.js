import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';

export function uniqBy([path, array]) {

	if ( isEmpty(path) ) {
		return [];
	}

	if ( !isArray(array) ) {
		return [];
	}

	return array.uniqBy(path);

}

export default helper(uniqBy);
