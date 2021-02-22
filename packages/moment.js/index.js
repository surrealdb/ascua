'use strict';

const transform = {
	using: [{ transformation: 'babel' }]
};

module.exports = {

	name: require('./package').name,

	included(app) {

		this._super.included.apply(this, ...arguments);

		app.import('node_modules/moment/moment.js');

		app.import('vendor/moment/instance.js', transform);
		app.import('vendor/moment/weekdays.js', transform);
		app.import('vendor/moment/workdays.js', transform);
		app.import('vendor/moment/override.js', transform);

		app.import('vendor/moment.js', {
			exports: { moment: ['default'] }
		});

		this.opts = this.project.config(app.env).moment || {
			locales: ['en-gb'],
		};

		if (this.opts.locales) {
			[].concat(this.opts.locales).forEach(l => {
				app.import('node_modules/moment/locale/'+l+'.js', transform);
				app.import('vendor/moment/locale/'+l+'.js', transform);
			});
		}

	},

};
