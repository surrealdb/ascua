import parse from './parse';
import char from './char';

export default function(keys, func, event) {

	let opts = parse(keys);

	if (opts.alt ^ event.altKey) {
		return true;
	}

	if (opts.ctrl ^ event.ctrlKey) {
		return true;
	}

	if (opts.meta ^ event.metaKey) {
		return true;
	}

	if (opts.shift ^ event.shiftKey) {
		return true;
	}

	if (char[opts.char] !== event.which) {
		return true;
	}

	event.stopPropagation();

	event.preventDefault();

	return func(event);

}
