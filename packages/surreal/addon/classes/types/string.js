export default (v) => {
	switch (v) {
	case undefined:
		return "";
	case null:
		return "";
	default:
		return String(v);
	}
};
