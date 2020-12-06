(function() {

	'use strict';

	/* globals dayjs */

	dayjs.prototype._add = dayjs.prototype.add;

	dayjs.prototype.add = function(val, period) {
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

	dayjs.prototype._subtract = dayjs.prototype.subtract;

	dayjs.prototype.subtract = function(val, period) {
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
