'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this.opts = app.options.prism || {};

		this._super.included.apply(this, ...arguments);

		app.import(`node_modules/prismjs/prism.js`);

		if (this.opts.copyToClipboard) {
			app.import('node_modules/prismjs/plugins/toolbar/prism-toolbar.js');
			app.import('node_modules/prismjs/plugins/toolbar/prism-toolbar.css');
			app.import('node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js');
		}

		if (this.opts.languages) {
			[].concat(this.opts.languages).forEach((l) => {
				app.import(`node_modules/prismjs/components/prism-${l}.js`);
			});
		}

		if (this.opts.theme) {
			app.import(`node_modules/prismjs/themes/prism-${this.opts.theme}.css`);
		} else {
			app.import(`node_modules/prismjs/themes/prism.css`);
		}

		app.import('vendor/prism.js', {
			exports: { prism: ['default'] },
		});

	},

};
