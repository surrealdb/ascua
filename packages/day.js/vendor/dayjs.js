(function() {

	/* globals define, dayjs */

	function generateModule(name, values) {
		define(name, [], function() {
			'use strict';
			return values;
		});
	}

	dayjs.extend(dayjs_plugin_isoWeek);
	dayjs.extend(dayjs_plugin_localeData);
	dayjs.extend(dayjs_plugin_localizedFormat);
	dayjs.extend(dayjs_plugin_updateLocale);

	generateModule('dayjs', {
		'default': typeof dayjs === 'undefined' ? null : dayjs
	});

})();
