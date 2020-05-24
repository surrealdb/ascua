(function() {

	/* globals define, JSZip */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('zip', {
		'default': typeof JSZip === 'undefined' ? null : JSZip,
	});

})();
