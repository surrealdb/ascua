(function() {

	/* globals, Prism */

	if (typeof Prism !== 'undefined') {
		Prism.manual = true;
	}

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('prism', {
		'default': typeof Prism === 'undefined' ? null : Prism
	});

})();
