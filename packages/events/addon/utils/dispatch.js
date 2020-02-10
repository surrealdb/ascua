import Event from '../utils/event';

export default function(event, name) {
	return event.target.dispatchEvent(
		new Event(name, {
			detail: event,
		})
	);
}
