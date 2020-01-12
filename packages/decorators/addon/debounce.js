import { assert } from '@ember/debug';
import { addListener } from '@ember/object/events';

export default function(duration) {

	return function(target, key, desc) {

		assert(
			'The on decorator must be applied to functions',
			desc && typeof desc.value === 'function',
		);

		return {
			configurable: true,
			enumerable: desc.enumerable,
			get: function() {
				Object.defineProperty(this, key, {
					configurable: true,
					enumerable: desc.enumerable,
					value: debounce(desc.value, duration)
				});
				return this[key];
			}
		}

	}

}

export function debounce(func, duration = 500) {

	let timer;

	function debouncer(...args) {
		debouncer.clear();
		timer = setTimeout( () => {
			timer = null;
			func.apply(this, args);
		}, duration);
	}

	debouncer.clear = function() {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}

	return debouncer;

}
