'use strict';

module.exports = {

	description: 'Generates a configuration for the @ascua/fastboot addon.',

	normalizeEntityName() {},

	async afterInstall() {

		await this.taskFor('npm-install').run({
			save: true, packages: ['@ascua/server']
		});

		return this.addPackagesToProject([
			{ name: 'ember-cli-fastboot', target: '2.2.1' },
		]);
	},

};

