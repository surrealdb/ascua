export default (v) => {
	switch (v) {
	case undefined:
		return v;
	case null:
		return v;
	default:
		return String(v);
	}
};
