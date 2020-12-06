(function() {

	'use strict';

	/* globals dayjs */

	const defaultWorkDays = [1, 2, 3, 4, 5];

	dayjs.prototype.isWorkday = function() {
		let locale = this.localeData();
		let days = locale._workDays || defaultWorkDays;
		if (this.isHoliday()) return false;
		return days.includes( this.isoWeekday() ) === true;
	};

	dayjs.prototype.isHoliday = function() {
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

	dayjs.prototype.prevWorkday = function() {
		let x = this;
		while (true) {
			x = x.subtract(1, 'day');
			if (x.isWorkday()) return x;
		}
	};

	dayjs.prototype.nextWorkday = function() {
		let x = this;
		while (true) {
			x = x.add(1, 'day');
			if (x.isWorkday()) return x;
		}
	};

	dayjs.prototype.diffWorkdays = function(compare) {

		let diff = 0;
		let d1 = this.clone();
		let d2 = compare.clone();
		let beg = d1 < d2 ? d1 : d2;
		let end = d2 > d1 ? d2 : d1;

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

	dayjs.prototype.changeWorkday = function(number) {
		let sign = number < 0 ? -1 : 1;
		let days = Math.abs(number);
		let x = this;
		while (days > 0) {
			x = x.add(sign, 'days');
			if (x.isWorkday()) {
				days--;
			}
		}
		return x;
	};

	dayjs.prototype.addWorkdays = function(number) {
		return this.changeWorkday(+number);
	};

	dayjs.prototype.subtractWorkdays = function(number) {
		return this.changeWorkday(-number);
	};

})();
