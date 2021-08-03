(function() {

	/* globals define, window */

	const Remote = window.node && window.node.require('@electron/remote');

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('@electron/remote', {
		'default': typeof Remote === 'undefined' ? null : Remote
	});

})();
