'use strict';

module.exports = {

	description: 'Generates a configuration for the @ascua/fastboot addon.',

	normalizeEntityName() {},

	afterInstall() {
		return this.addPackagesToProject([
			{ name: 'ember-cli-fastboot', target: '2.2.1' },
		]);
	},

};

