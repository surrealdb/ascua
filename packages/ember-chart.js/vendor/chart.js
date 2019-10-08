(function() {

	/* globals define, Chart */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('chart.js', {
		'default': typeof Chart === 'undefined' ? null : Chart
	});

})();
