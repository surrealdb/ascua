import { assert } from '@ember/debug';
import { removeListener } from '@ember/object/events';

export default function (...events) {

	assert(
		'The @off decorator requires event names to be specified',
		events.length > 0 && events.every(v => typeof v === "string")
	);

	return function(target, key, desc) {

		for (let event of events) {
			removeListener(target, event, null, key);
		}

		return desc;

	}

}
