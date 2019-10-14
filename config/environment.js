'use strict';

module.exports = function(environment) {

	let ENV = {

		environment,
		rootURL: '/',
		locationType: 'auto',
		modulePrefix: 'ascua',

		APP: {
			BINDINGS: false,
			LOG_RESOLVER: false,
			LOG_TRANSITIONS: false,
			LOG_VIEW_LOOKUPS: false,
			LOG_ACTIVE_GENERATION: false,
			LOG_TRANSITIONS_INTERNAL: false,
			RAISE_ON_DEPRECATION: false,
			LOG_STACKTRACE_ON_DEPRECATION: false,
		},

		EmberENV: {
			EXTEND_PROTOTYPES: {
				Date: false,
			},
			FEATURES: {
				EMBER_METAL_TRACKED_PROPERTIES: true,
			},
		},

	};

	if (environment === 'test') {
		ENV.APP.autoboot = false;
		ENV.locationType = 'none';
		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'development') {
		ENV.rootURL = '/';
	}

	if (environment === 'production') {
		ENV.locationType = 'hash';
		ENV.rootURL = '/ascua/';
	}

	return ENV;

};
