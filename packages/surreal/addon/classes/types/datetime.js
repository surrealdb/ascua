export default (v) => {
	switch (v) {
	case undefined:
		return v;
	case null:
		return v;
	default:
		return new Date(v).toJSON();
	}
}
