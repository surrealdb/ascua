(function() {

	'use strict';

	/* globals moment */

	moment.updateLocale('en-gb', {
		workdays: [1, 2, 3, 4, 5],
		holidays: [
			{ value: '01/01', format: 'DD/MM' }, // New Year
			{ value: '19/04/2019', format: 'DD/MM/YYYY' }, // Good Friday
			{ value: '22/04/2019', format: 'DD/MM/YYYY' }, // Easter Monday
			{ value: (m) => m.month(4).firstInstanceOf(1).format('DD/MM/YYYY'), format: 'DD/MM/YYYY' }, // May Day
			{ value: (m) => m.month(4).lastInstanceOf(1).format('DD/MM/YYYY'), format: 'DD/MM/YYYY' }, // Spring
			{ value: '25/12', format: 'DD/MM' }, // Christmas Day
			{ value: '26/12', format: 'DD/MM' }, // Boxing Day
		],
	});

})();
