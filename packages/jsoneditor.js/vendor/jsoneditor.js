(function() {

	/* globals define, JSONEditor */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('jsoneditor', {
		'default': typeof JSONEditor === 'undefined' ? null : JSONEditor,
	});

})();
