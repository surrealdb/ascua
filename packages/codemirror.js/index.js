'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		this.opts = this.project.config(app.env).codemirror || {};

		app.import('node_modules/codemirror/lib/codemirror.js', fastboot);
		app.import('node_modules/codemirror/lib/codemirror.css');
		app.import('node_modules/codemirror/addon/mode/simple.js', fastboot);
		app.import('node_modules/codemirror/addon/mode/multiplex.js', fastboot);

		if (this.opts.includeTags) {
			app.import('node_modules/codemirror/addon/edit/closetag.js', fastboot);
			app.import('node_modules/codemirror/addon/edit/matchtags.js', fastboot);
		}

		if (this.opts.includeBrackets) {
			app.import('node_modules/codemirror/addon/edit/closebrackets.js', fastboot);
			app.import('node_modules/codemirror/addon/edit/matchbrackets.js', fastboot);
		}

		if (this.opts.includeComments) {
			app.import('node_modules/codemirror/addon/comment/comment.js', fastboot);
		}

		if (this.opts.includeWhitespace) {
			app.import('node_modules/codemirror/addon/edit/trailingspace.js', fastboot);
		}

		if (this.opts.modes) {
			[].concat(this.opts.modes).forEach( (m) => {
				app.import('node_modules/codemirror/mode/'+m+'/'+m+'.js', fastboot);
			});
		}

		if (this.opts.themes) {
			[].concat(this.opts.themes).forEach( (t) => {
				app.import('node_modules/codemirror/theme/'+t+'.css');
			});
		}

		app.import('vendor/codemirror.css');
		app.import('vendor/codemirror.js', {
			exports: { CodeMirror: ['default'] }
		});

	},

};
