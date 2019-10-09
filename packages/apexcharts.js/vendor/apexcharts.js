(function() {

	/* globals define, ApexCharts */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('apexcharts.js', {
		'default': typeof ApexCharts === 'undefined' ? null : ApexCharts
	});

})();
