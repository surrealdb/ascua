import { assert } from '@ember/debug';
import { removeListener } from '@ember/object/events';

export default function (...params) {

	assert('The off decorator requires parameters', params.length > 0);

	return function(target, key, desc) {

		for (let event of params) {
			removeListener(target, event, null, key);
		}

		return desc;

	}

}
