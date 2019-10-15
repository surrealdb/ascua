import { assert } from '@ember/debug';
import { addListener } from '@ember/object/events';

export default function(...events) {

	assert(
		'The @off decorator requires event names to be specified',
		events.length > 0 && events.every(v => typeof v === "string")
	);

	return function(target, key, desc) {

		assert(
			'The on decorator must be applied to functions',
			desc && typeof desc.value === 'function',
		);

		for (let event of events) {
			addListener(target, event, null, key);
		}

		return desc;

	}

}
