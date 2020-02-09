'use strict';

var fs = require('fs');
var path = require('path');
var FileCreator = require('broccoli-file-creator');

module.exports = {

	name: require('./package').name,

	treeForAddon() {

		let name = this.project.config(process.env.EMBER_ENV).modulePrefix;

		let tree = new FileCreator(
			'index.js',
			`export { default } from '${name}/config/environment';`
		);

		return this._super.treeForAddon.call(this, tree);

	},

};
