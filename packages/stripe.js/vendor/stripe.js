(function() {

	/* globals define, Stripe */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('stripe', {
		'default': typeof Stripe === 'undefined' ? null : Stripe,
	});

})();
