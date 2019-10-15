import { assert } from '@ember/debug';
import { expandProperties } from '@ember/object/computed';
import { removeObserver } from '@ember/object/observers';

export default function(...paths) {

	assert(
		'The @unobserve decorator requires `dependentKey` parameters',
		paths.length > 0 && paths.every(v => typeof v === "string")
	);

	return function(target, key, desc) {

		for (let path of paths) {
			expandProperties(path, prop => {
				removeObserver(target, prop, null, key);
			});
		}

		return desc;

	}

}
