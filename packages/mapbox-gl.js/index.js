'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/mapbox-gl/dist/mapbox-gl.js', fastboot);
		app.import('node_modules/mapbox-gl/dist/mapbox-gl.css');

		app.import('node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js', fastboot);
		app.import('node_modules/@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css');

		app.import('node_modules/@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js', fastboot);
		app.import('node_modules/@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css');

		app.import('vendor/mapbox.js', {
			exports: { 'mapbox-gl': ['default'] }
		});

	},

};
