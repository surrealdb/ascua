if (typeof process !== 'undefined') {

	(window => {

		window.ELECTRON = true;

		window.node = {};
		window.node.module = window.module;
		window.node.process = window.process;
		window.node.require = window.require;

		delete window.module;
		delete window.process;
		delete window.require;

	})(window);

}
