import { helper } from '@ember/component/helper';
import Event from '../utils/event';

export function dispatchEvent([name='custom']) {
	return (event) => {
		return event.target.dispatchEvent(
			new Event(name, {
				detail: {
					originalEvent: event,
				}
			})
		);
	};
}

export default helper(dispatchEvent);
