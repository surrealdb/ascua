'use strict';

const Stew = require('broccoli-stew');

module.exports = {

	name: require('./package').name,

	importTransforms() {
		return {
			fastboot(tree) {
				return Stew.map(tree, (v) => {
					return `if (typeof FastBoot === "undefined") { ${v} }`;
				});
			}
		}
	},

};
