(function() {

	/* globals define, elementResizeDetectorMaker */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('element-resize-detector', {
		'default': typeof elementResizeDetectorMaker === 'undefined' ? null : elementResizeDetectorMaker
	});

})();
