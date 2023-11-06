'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot' }]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/masonry-layout/dist/masonry.pkgd.js', fastboot);

		app.import('vendor/masonry.js', {
			exports: { masonry: ['default'] }
		});

	},

};
