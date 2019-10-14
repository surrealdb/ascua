/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {

	let ENV = {
		build: {}
	};

	if (deployTarget === 'development') {
		ENV.build.environment = 'development';
	}

	if (deployTarget === 'production') {
		ENV.build.environment = 'production';
	}

	ENV.git = {
		repo: 'git@github.com:abcum/ascua.git',
		branch: 'gh-pages',
		worktreePath: '/tmp/ascua-deploy',
		commitMessage: 'Deployed %@',
	};

	return ENV;

};
