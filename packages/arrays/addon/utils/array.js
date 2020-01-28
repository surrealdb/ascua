export default function(value) {
	switch (true) {
	case value === null:
		return [];
	case value === undefined:
		return [];
	default:
		return [].concat(value);
	}
}
