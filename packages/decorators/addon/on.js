import { assert } from '@ember/debug';
import { addListener } from '@ember/object/events';

export default function (...params) {

	assert('The on decorator requires parameters', params.length > 0);

	return function(target, key, desc) {

		assert(
			'The on decorator must be applied to functions',
			desc && typeof desc.value === 'function',
		);

		for (let event of params) {
			addListener(target, event, null, key);
		}

		return desc;

	}

}
