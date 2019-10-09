import { helper } from '@ember/component/helper';
import RSVP from 'rsvp';

export function rsvpRace(...promises) {
	return RSVP.race(promises);
}

export default helper(revpRace);
