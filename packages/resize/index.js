'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/element-resize-detector/dist/element-resize-detector.js', fastboot);

		app.import('vendor/resize.js', {
			exports: { elementResizeDetectorMaker: ['default'] }
		});

	},

};
