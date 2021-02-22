'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/pdfjs-dist/es5/build/pdf.js', {
			outputFile: 'assets/pdfjs.js'
		});

		app.import('node_modules/pdfjs-dist/es5/build/pdf.worker.js', {
			outputFile: 'assets/pdfjs-worker.js'
		});

	},

};
