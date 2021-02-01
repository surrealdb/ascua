'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/sortablejs/Sortable.js', fastboot);

		app.import('vendor/sortable.js', {
			exports: { sortable: ['default'] }
		});

	},

};
