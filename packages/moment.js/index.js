'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/moment/moment.js');

		app.import('vendor/moment/instance.js');
		app.import('vendor/moment/weekdays.js');
		app.import('vendor/moment/workdays.js');
		app.import('vendor/moment/override.js');

		app.import('vendor/moment.js', {
			exports: { moment: ['default'] }
		});

		this.opts = this.project.config(app.env).moment || {};

		if (this.opts.locales) {
			[].concat(this.opts.locales).forEach(l => {
				app.import('node_modules/moment/locale/'+l+'.js');
				app.import('vendor/moment/locale/'+l+'.js');
			});
		}

	},

};
