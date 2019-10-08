import { assert } from '@ember/debug';
import { expandProperties } from '@ember/object/computed';
import { removeObserver } from '@ember/object/observers';

export default function (...params) {

	assert('The unobserve decorator requires parameters', params.length > 0);

	return function(target, key, desc) {

		for (let path of params) {
			expandProperties(path, prop => {
				removeObserver(target, prop, null, key);
			});
		}

		return desc;

	}

}
