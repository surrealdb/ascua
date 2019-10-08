import { helper } from '@ember/component/helper';
import RSVP from 'rsvp';

export function rsvpAll(...promises) {
	return RSVP.all(promises);
}

export default helper(rsvpAll);
