'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/file-saver/dist/FileSaver.js', fastboot);

		app.import('node_modules/xlsx/dist/xlsx.core.min.js', fastboot);

		app.import('vendor/sheet.js', {
			exports: {
				XLS: ['default', 'saveAs'],
				XLSX: ['default', 'saveAs'],
			}
		});

	},

};
