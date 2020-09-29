import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';
import { get } from '@ember/object';
import array from '../utils/array';

export function groupBy([path, value]) {

	if ( isEmpty(path) ) {
		return undefined;
	}

	if ( !isArray(value) ) {
		return undefined;
	}

	let groups = {};

	array(value).forEach(item => {

		let value = get(item, path);

		if ( !isArray(groups[value]) ) {
			groups[value] = [];
		}

		groups[value].push(item);

	});

	return groups;

}

export default helper(groupBy);
