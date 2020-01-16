(function() {

	/* globals define, mapboxgl */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('mapbox-gl', {
		'default': typeof mapboxgl === 'undefined' ? null : mapboxgl
	});

})();
