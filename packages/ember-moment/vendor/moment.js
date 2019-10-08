(function() {

	/* globals define, moment */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('moment', {
		'default': typeof moment === 'undefined' ? null : moment
	});

})();
