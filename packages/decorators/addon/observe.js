import { assert } from '@ember/debug';
import { expandProperties } from '@ember/object/computed';
import { addObserver } from '@ember/object/observers';

export default function (...paths) {

	assert(
		'The @unobserve decorator requires `dependentKey` parameters',
		paths.length > 0 && paths.every(v => typeof v === "string")
	);

	return function(target, key, desc) {

		assert(
			'The observe decorator must be applied to functions',
			desc && typeof desc.value === 'function',
		);

		for (let path of paths) {
			expandProperties(path, prop => {
				addObserver(target, prop, null, key);
			});
		}

		return desc;

	}

}
