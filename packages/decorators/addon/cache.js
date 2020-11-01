import { assert } from '@ember/debug';
import { createCache, getValue } from '@glimmer/tracking/primitives/cache';

export default function(target, key, desc) {

	assert(
		'The cache decorator must only be applied to a getter function',
		desc.get && typeof desc.get === 'function',
	);

	let s = Symbol(key);

	return {
		enumerable: true,
		configurable: true,
		set: undefined,
		get() {
			if (!this[s]) {
				this[s] = createCache( desc.get.bind(this) );
			}
			return getValue(this[s]);
		},
	};

}
