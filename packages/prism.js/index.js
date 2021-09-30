'use strict';

const fastboot = {
	using: [{ transformation: 'fastboot'}]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		this.opts = app.options.prism || {};

		this.theme = 'themes/prism.css';

		if (this.opts.theme) {
			this.theme = `prism-${this.opts.theme}.css`;
		}

		if (this.opts.languages) {
			[].concat(this.opts.languages).forEach( (l) => {
				app.import(`node_modules/prismjs/components/prism-${l}.js`);
			});
		}

		app.import(`node_modules/prismjs/themes/${this.theme}`);

		app.import('vendor/prism.js');

	},

};
