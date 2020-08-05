(function() {

	/* globals define, fontkit */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('fontkit', {
		'default': typeof fontkit === 'undefined' ? null : fontkit
	});

})();
