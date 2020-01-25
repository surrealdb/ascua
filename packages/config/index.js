'use strict';

var fs = require('fs');
var path = require('path');
var FileCreator = require('broccoli-file-creator');

module.exports = {

	name: require('./package').name,

	treeForAddon() {

		let name = this.project.config(this.app.env).modulePrefix;

		let tree = new FileCreator(
			'index.js',
			`export { default } from '${name}/config/environment';`
		);

    	return this._super.treeForAddon.call(this, tree);

	},

};
