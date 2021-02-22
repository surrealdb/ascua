'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/pdfjs-dist/build/pdf.js', {
			using: [{ transformation: 'babel' }],
			outputFile: 'assets/pdfjs.js'
		});

		app.import('node_modules/pdfjs-dist/build/pdf.worker.js', {
			using: [{ transformation: 'babel' }],
			outputFile: 'assets/pdfjs-worker.js'
		});

	},

};
