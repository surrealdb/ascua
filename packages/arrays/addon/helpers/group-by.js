import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import { isArray } from '@ember/array';
import { get } from '@ember/object';

export function groupBy([path, array]) {

	if ( isEmpty(path) ) {
		return undefined;
	}

	if ( !isArray(array) ) {
		return undefined;
	}

	let groups = {};

	[].concat(array).forEach(item => {

		let value = get(item, path);
		let group = get(groups, value);

		if ( !isArray(group) ) {
			groups[value] = [];
		}

		groups[value].push(item);

	});

	return groups;

}

export default helper(groupBy);
