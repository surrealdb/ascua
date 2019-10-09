'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, arguments);

		app.import('node_modules/file-saver/FileSaver.min.js', fastboot);

		app.import('node_modules/xlsx/dist/xlsx.full.min.js', fastboot);

		app.import('vendor/sheetjs.js', {
			exports: {
				XLS: ['default', 'saveAs'],
				XLSX: ['default', 'saveAs'],
			}
		});

	},

};
