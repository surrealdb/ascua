import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';

export function objectsAt([...params]) {

	let items = params.slice(0, -1);
	let array = params.slice().pop();

	if ( !isArray(array) ) {
		return [];
	}

	return [].concat(array).objectsAt(items);

}

export default helper(objectsAt);
