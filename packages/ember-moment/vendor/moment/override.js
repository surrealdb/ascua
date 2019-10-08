(function() {

	'use strict';

	/* globals moment */

	moment.fn._add = moment.fn.add;

	moment.fn.add = function(val, period) {
		switch (period) {
		case 'weekday':
		case 'weekdays':
			return this.addWeekdays(val);
		case 'workday':
		case 'workdays':
			return this.addWorkdays(val);
		default:
			return this._add(...arguments);
		}
	};

	moment.fn._subtract = moment.fn.subtract;

	moment.fn.subtract = function(val, period) {
		switch (period) {
		case 'weekday':
		case 'weekdays':
			return this.subtractWeekdays(val);
		case 'workday':
		case 'workdays':
			return this.subtractWorkdays(val);
		default:
			return this._subtract(...arguments);
		}
	};

}).call(this);
