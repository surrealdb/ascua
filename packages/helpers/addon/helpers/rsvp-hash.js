import { helper } from '@ember/component/helper';
import RSVP from 'rsvp';

export function rsvpHash(args, promises) {
	return RSVP.hash(promises);
}

export default helper(rsvpHash);
