(function() {

	'use strict';

	/* globals moment */

	moment.fn.instance = function(isoweekday, occurence) {
		switch (occurence) {
		case 1:
			return this.firstInstanceOf(isoweekday);
		case 2:
			return this.secondInstanceOf(isoweekday);
		case 3:
			return this.thirdInstanceOf(isoweekday);
		case 4:
			return this.fourthInstanceOf(isoweekday);
		default:
			return this.lastInstanceOf(isoweekday);
		}
	};

	moment.fn.firstInstanceOf = function(isoweekday) {
		let val = this.startOf('month');
		while (val.isoWeekday() !== isoweekday) {
			val.add(1, 'day');
		}
		return val;
	};

	moment.fn.secondInstanceOf = function(isoweekday) {
		let val = this.startOf('month').add(1, 'week');
		while (val.isoWeekday() !== isoweekday) {
			val.add(1, 'day');
		}
		return val;
	};

	moment.fn.thirdInstanceOf = function(isoweekday) {
		let val = this.startOf('month').add(2, 'week');
		while (val.isoWeekday() !== isoweekday) {
			val.add(1, 'day');
		}
		return val;
	};

	moment.fn.fourthInstanceOf = function(isoweekday) {
		let val = this.startOf('month').add(3, 'week');
		while (val.isoWeekday() !== isoweekday) {
			val.add(1, 'day');
		}
		return val;
	};

	moment.fn.lastInstanceOf = function(isoweekday) {
		let val = this.endOf('month');
		while (val.isoWeekday() !== isoweekday) {
			val.subtract(1, 'day');
		}
		return val;
	};

})();
