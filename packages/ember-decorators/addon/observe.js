import { assert } from '@ember/debug';
import { expandProperties } from '@ember/object/computed';
import { addObserver } from '@ember/object/observers';

export default function (...params) {

	assert('The observe decorator requires parameters', params.length > 0);

	return function(target, key, desc) {

		assert(
			'The observe decorator must be applied to functions',
			desc && typeof desc.value === 'function',
		);

		for (let path of params) {
			expandProperties(path, prop => {
				addObserver(target, prop, null, key);
			});
		}

		return desc;

	}

}
