'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/pdfjs-dist/build/pdf.js', {
			outputFile: 'assets/pdfjs.js'
		});

		app.import('node_modules/pdfjs-dist/build/pdf.worker.js', {
			outputFile: 'assets/pdfjs-worker.js'
		});

	},

};
