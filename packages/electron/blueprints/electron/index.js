'use strict';

module.exports = {

	description: 'Generates a configuration for the @ascua/electron addon.',

	normalizeEntityName() {},

	async afterInstall() {

		return this.taskFor('npm-install').run({
			save: true, packages: ['@ascua/app']
		});
	},

};

