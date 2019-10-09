(function() {

	/* globals define, saveAs, XLS, XLSX */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('XLS', {
		'default': typeof XLS === 'undefined' ? null : XLS,
		'saveAs': typeof saveAs === 'undefined' ? null : saveAs,
	});

	generateModule('XLSX', {
		'default': typeof XLSX === 'undefined' ? null : XLSX,
		'saveAs': typeof saveAs === 'undefined' ? null : saveAs,
	});

})();
