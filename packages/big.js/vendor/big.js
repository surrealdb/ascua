(function() {

	/* globals define, Big */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('big.js', {
		'default': typeof Big === 'undefined' ? null : Big
	});

})();
