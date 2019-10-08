(function() {

	'use strict';

	/* globals moment */

	const defaultWorkDays = [1, 2, 3, 4, 5];

	moment.fn.isWeekday = function() {
		let locale = this.localeData();
		let days = locale._workDays || defaultWorkDays;
		return days.includes( this.isoWeekday() ) === true;
	};

	moment.fn.isWeekend = function() {
		let locale = this.localeData();
		let days = locale._workDays || defaultWorkDays;
		return days.includes( this.isoWeekday() ) === true;
	};

	moment.fn.prevWeekday = function() {
		while (true) {
			if (this.subtract(1, 'day').isWeekday()) {
				break;
			}
		}
		return this;
	};

	moment.fn.nextWeekday = function() {
		while (true) {
			if (this.add(1, 'day').isWeekday()) {
				break;
			}
		}
		return this;
	};

	moment.fn.diffWeekdays = function(compare) {

		let diff = 0;
		var d1 = this.clone();
		var d2 = compare.clone();
		var beg = d1 < d2 ? d1 : d2;
		var end = d2 > d1 ? d2 : d1;

		if (beg.format('DD/MM/YYYY') === end.format('DD/MM/YYYY')) {
			return diff;
		}

		while (beg < end) {
			if (beg.isWeekday()) {
				diff++;
			}
			beg.add(1, 'd');
		}

		return diff;

	};

	moment.fn.changeWeekday = function(number) {
		let sign = number < 0 ? -1 : 1;
		var days = Math.abs(number);
		while (days > 0) {
			this.add(sign, 'days');
			if (this.isWeekday()) {
				days--;
			}
		}
		return this;
	};

	moment.fn.addWeekdays = function(number) {
		return this.changeWeekday(+number);
	};

	moment.fn.subtractWeekdays = function(number) {
		return this.changeWeekday(-number);
	};

})();
