export function original(config) {

	/* eslint-disable */
	window._cio = window._cio || [];
	(function() {
		var a,b,c;a=function(f){return function(){window._cio.push([f].
		concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
		"sidentify","track","page"];for(c=0;c<b.length;c++){window._cio[b[c]]=a(b[c])};
		var t = document.createElement('script'),s = document.getElementsByTagName('script')[0];
		t.async = true; t.id = 'cio-tracker';
		t.setAttribute('data-site-id', config.id);
		t.setAttribute('data-base-url', 'https://eu.customerioforms.com');
		t.setAttribute('data-use-array-params', 'true');
		t.setAttribute('data-auto-track-page', 'false');
		t.setAttribute('data-use-in-app', 'false');
		t.src = 'https://assets.customer.io/assets/track-eu.js';
		s.parentNode.insertBefore(t, s);
	})();
	/* eslint-enable */

}

export function optimised(config) {

	original(config);

}

export default {
	original,
	optimised,
}
