(function() {

	/* globals define, Masonry */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('masonry.js', {
		'default': typeof Masonry === 'undefined' ? null : Masonry
	});

})();
