'use strict';

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included(...arguments);

		app.import('node_modules/dayjs/dayjs.min.js');
		app.import('node_modules/dayjs/plugin/isoWeek.js');
		app.import('node_modules/dayjs/plugin/localeData.js');
		app.import('node_modules/dayjs/plugin/localizedFormat.js');
		app.import('node_modules/dayjs/plugin/updateLocale.js');

		app.import('vendor/dayjs/instance.js');
		app.import('vendor/dayjs/weekdays.js');
		app.import('vendor/dayjs/workdays.js');
		app.import('vendor/dayjs/override.js');

		app.import('vendor/dayjs.js', {
			exports: { moment: ['default'] }
		});

		this.opts = this.project.config(app.env).dayjs || {
			locales: ['en-gb'],
		};

		if (this.opts.locales) {
			[].concat(this.opts.locales).forEach(l => {
				app.import('node_modules/dayjs/locale/'+l+'.js');
				app.import('vendor/dayjs/locale/'+l+'.js');
			});
		}

	},

};
