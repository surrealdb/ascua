'use strict';

module.exports = {

	description: 'Generates a configuration for the @ascua/electron addon.',

	normalizeEntityName() {},

	locals(options) {
		return {
			name: options.project.name(),
		};
	},

};

