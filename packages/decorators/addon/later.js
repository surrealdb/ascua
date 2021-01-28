import { assert } from '@ember/debug';

export default function(target, key, desc) {

	assert(
		'The @later decorator must be applied to a method',
		desc && typeof desc.value === 'function',
	);

	return {
		configurable: true,
		enumerable: desc.enumerable,
		value() {
			return setTimeout(desc.value.bind(this, ...arguments), 0);
		}
	}

}
