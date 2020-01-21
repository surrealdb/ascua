(function() {

	/* globals define, Surreal */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('surreal', {
		'default': typeof Surreal === 'undefined' ? null : Surreal
	});

})();
