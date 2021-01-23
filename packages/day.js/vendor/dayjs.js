(function() {

	/* globals define, dayjs */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	/* globals dayjs_plugin_calendar */
	dayjs.extend(dayjs_plugin_calendar);
	/* globals dayjs_plugin_isoWeek */
	dayjs.extend(dayjs_plugin_isoWeek);
	/* globals dayjs_plugin_localeData */
	dayjs.extend(dayjs_plugin_localeData);
	/* globals dayjs_plugin_localizedFormat */
	dayjs.extend(dayjs_plugin_localizedFormat);
	/* globals dayjs_plugin_relativeTime */
	dayjs.extend(dayjs_plugin_relativeTime);
	/* globals dayjs_plugin_updateLocale */
	dayjs.extend(dayjs_plugin_updateLocale);
	/* globals dayjs_plugin_utc */
	dayjs.extend(dayjs_plugin_utc);

	generateModule('dayjs', {
		'default': typeof dayjs === 'undefined' ? null : dayjs
	});

})();
