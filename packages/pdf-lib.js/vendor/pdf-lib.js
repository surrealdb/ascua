(function() {

	/* globals define, PDFLib */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('pdf-lib', {
		'default': typeof PDFLib === 'undefined' ? null : PDFLib
	});

})();
