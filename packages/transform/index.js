'use strict';

const Stew = require('broccoli-stew');
const Transpile = require('broccoli-babel-transpiler');

module.exports = {

	name: require('./package').name,

	importTransforms() {

		const babel = this.project.findAddonByName('ember-cli-babel');

		return {
			babel(tree) {
				return Transpile(tree, {
					...babel.buildBabelOptions(),
					sourceType: 'script',
				});
			},
			fastboot(tree) {
				return Stew.map(tree, (v) => {
					return `if (typeof FastBoot === "undefined") { ${v} }`;
				});
			},
		};

	},

};
