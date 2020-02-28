export default (function () {

	if ( typeof FastBoot !== "undefined" ) return undefined;

	if ( typeof window.CustomEvent === "function" ) return window.CustomEvent;

	function CustomEvent(name, params) {
		params = Object.extend({ bubbles: false, cancelable: false, detail: undefined }, params);
		let evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(name, params.bubbles, params.cancelable, params.detail);
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	return CustomEvent;

})();
