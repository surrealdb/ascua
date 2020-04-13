(function() {

	/* globals define, Cropper */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('cropper', {
		'default': typeof Cropper === 'undefined' ? null : Cropper
	});

})();
