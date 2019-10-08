(function() {

	'use strict';

	/* globals moment */

	const defaultWorkDays = [1, 2, 3, 4, 5];

	moment.fn.isWorkday = function() {
		let locale = this.localeData();
		let days = locale._workDays || defaultWorkDays;
		if (this.isHoliday()) return false;
		return days.includes( this.isoWeekday() ) === true;
	};

	moment.fn.isHoliday = function() {
		let locale = this.localeData();
		if (locale._holidays) {
			for (let i in locale._holidays) {
				let h = locale._holidays[i];
				let f = this.format(h.format);
				if (h.value instanceof Function) {
					let v = h.value(this.clone());
					if (f === v) return true;
				} else {
					let v = h.value;
					if (f === v) return true;
				}
			}
		}
		return false;
	};

	moment.fn.prevWorkday = function() {
		while (true) {
			if (this.subtract(1, 'day').isWorkday()) {
				break;
			}
		}
		return this;
	};

	moment.fn.nextWorkday = function() {
		while (true) {
			if (this.add(1, 'day').isWorkday()) {
				break;
			}
		}
		return this;
	};

	moment.fn.diffWorkdays = function(compare) {

		let diff = 0;
		var d1 = this.clone();
		var d2 = compare.clone();
		var beg = d1 < d2 ? d1 : d2;
		var end = d2 > d1 ? d2 : d1;

		if (beg.format('DD/MM/YYYY') === end.format('DD/MM/YYYY')) {
			return diff;
		}

		while (beg < end) {
			if (beg.isWorkday()) {
				diff++;
			}
			beg.add(1, 'd');
		}

		return diff;

	};

	moment.fn.changeWorkday = function(number) {
		let sign = number < 0 ? -1 : 1;
		var days = Math.abs(number);
		while (days > 0) {
			this.add(sign, 'days');
			if (this.isWorkday()) {
				days--;
			}
		}
		return this;
	};

	moment.fn.addWorkdays = function(number) {
		return this.changeWorkday(+number);
	};

	moment.fn.subtractWorkdays = function(number) {
		return this.changeWorkday(-number);
	};

})();
