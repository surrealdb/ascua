(function() {

	/* globals define, StackdriverErrorReporter */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('stackdriver.js', {
		'default': typeof StackdriverErrorReporter === 'undefined' ? null : StackdriverErrorReporter,
	});

})();
