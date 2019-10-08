import { helper } from '@ember/component/helper';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export function delay([ wait = 0 ]) {

	if (!wait) return Promise.resolve();

	return new Promise(resolve => {
		later(this, () => resolve(wait), wait);
	});

}

export default helper(delay);
