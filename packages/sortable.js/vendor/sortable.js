(function() {

	/* globals define, Sortable */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('sortable', {
		'default': typeof Sortable === 'undefined' ? null : Sortable,
	});

})();
