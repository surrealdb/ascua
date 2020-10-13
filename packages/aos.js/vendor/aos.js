(function() {

	/* globals define, AOS */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('aos.js', {
		'default': typeof AOS === 'undefined' ? null : AOS
	});

})();
