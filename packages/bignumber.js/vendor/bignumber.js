(function() {

	/* globals define, BigNumber */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('bignumber.js', {
		'default': typeof BigNumber === 'undefined' ? null : BigNumber
	});

})();
