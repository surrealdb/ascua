'use strict';

module.exports = {

	description: 'Generates a configuration for the @ascua/fastboot addon.',

	normalizeEntityName() {},

	locals(options) {
		return {
			name: options.project.name(),
		};
	},

	afterInstall() {
		return this.addPackagesToProject([
			{ name: 'ember-cli-fastboot', target: '2.2.1' },
		]);
	},

};

