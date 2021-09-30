(function() {

	/* globals define, Handsontable */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('handsontable', {
		'default': typeof Handsontable === 'undefined' ? null : Handsontable,
	});

})();
