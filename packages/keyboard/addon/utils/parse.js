export default function(keys) {

	let opts = {};

	opts.keys = keys.split('+');

	opts.char = opts.keys.pop();

	opts.alt = opts.keys.includes('alt');
	opts.meta = opts.keys.includes('cmd');
	opts.ctrl = opts.keys.includes('ctrl');
	opts.shift = opts.keys.includes('shift');

	return opts;

};
