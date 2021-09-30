'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		this.opts = app.options.prism || {};

		app.import(`node_modules/prismjs/prism.js`);

		if (this.opts.languages) {
			[].concat(this.opts.languages).forEach( (l) => {
				app.import(`node_modules/prismjs/components/prism-${l}.js`);
			});
		}

		if (this.opts.theme) {
			app.import(`node_modules/prismjs/themes/prism-${this.opts.theme}.css`);
		} else {
			app.import(`node_modules/prismjs/themes/prism.css`);
		}

		app.import('vendor/prism.js', {
			exports: { prism: ['default'] }
		});

	},

};
