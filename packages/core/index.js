'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		// Don't store app config in meta tag
		app.options.storeConfigInMeta = false;

		// Ensure ember-fetch configuration is optimised
		app.options['ember-fetch'] = app.options['ember-fetch'] || {};
		app.options['ember-fetch'].preferNative = true;
		app.options['ember-fetch'].alwaysIncludePolyfill = false;

		// Ensure correct file types are converted
		app.options.fingerprint = app.options.fingerprint || {};
		app.options.fingerprint.exclude = app.options.fingerprint.exclude || [];
		app.options.fingerprint.exclude.push('package.json');

		// Ensure correct file types are converted
		app.options.fingerprint = app.options.fingerprint || {};
		app.options.fingerprint.replaceExtensions = app.options.fingerprint.replaceExtensions || [];
		app.options.fingerprint.replaceExtensions.push('html', 'css', 'js', 'json', 'xml');

		// Ensure correct file types are fingerprinted
		app.options.fingerprint = app.options.fingerprint || {};
		app.options.fingerprint.extensions = app.options.fingerprint.extensions || [];
		app.options.fingerprint.extensions.push('js', 'css', 'map', 'xml', 'json');
		app.options.fingerprint.extensions.push('eot', 'otf', 'ttf', 'woff', 'woff2');
		app.options.fingerprint.extensions.push('gif', 'jpg', 'jp2', 'png', 'svg', 'tiff', 'webp');

	},

};
