(function() {

	/* globals define, Decimal */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('decimal.js', {
		'default': typeof Decimal === 'undefined' ? null : Decimal
	});

})();
