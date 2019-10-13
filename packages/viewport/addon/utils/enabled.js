export default function() {
	try {
		if (!window) throw "exception";
		if (!window.IntersectionObserver) throw "exception";
		if (!window.IntersectionObserverEntry) throw "exception";
		return true;
	} catch (e) {
		return false;
	}
}
