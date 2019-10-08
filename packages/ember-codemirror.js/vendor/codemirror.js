(function() {

	/* globals define, CodeMirror */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('codemirror', {
		'default': typeof CodeMirror === 'undefined' ? null : CodeMirror
	});

})();
