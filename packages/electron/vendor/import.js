(function() {

	/* globals define, window */

	const Electron = window.node && window.node.require('electron');

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	generateModule('electron', {
		'default': typeof Electron === 'undefined' ? null : Electron
	});

})();
