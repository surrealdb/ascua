import Controller from '@ember/controller';

export default class extends Controller {

	cols = [
		'ID',
		'Country',
		'Code',
		'Currency',
		'Level',
		'Units',
		'Date',
		'Change'
	];

	data = [
		{
			ID: 1,
			Country: 'EUR',
			Code: 'EUR',
			Currency: 'Euro',
			Level: 0.9033,
			Units: 'EUR / USD',
			Date: '08/19/2019',
			Change: 0.0026
		},
		{
			ID: 2,
			Country: 'JPY',
			Code: 'JPY',
			Currency: 'Japanese Yen',
			Level: 124.3870,
			Units: 'JPY / USD',
			Date: '08/19/2019',
			Change: 0.0001
		},
		{
			ID: 3,
			Country: 'GBP',
			Code: 'GBP',
			Currency: 'Pound Sterling',
			Level: 0.6396,
			Units: 'GBP / USD',
			Date: '08/19/2019',
			Change: 0.00
		},
		{
			ID: 4,
			Country: 'CHF',
			Code: 'CHF',
			Currency: 'Swiss Franc',
			Level: 0.9775,
			Units: 'CHF / USD',
			Date: '08/19/2019',
			Change: 0.0008
		},
		{
			ID: 5,
			Country: 'CAD',
			Code: 'CAD',
			Currency: 'Canadian Dollar',
			Level: 1.3097,
			Units: 'CAD / USD',
			Date: '08/19/2019',
			Change: -0.0005
		},
		{
			ID: 6,
			Country: 'AUD',
			Code: 'AUD',
			Currency: 'Australian Dollar',
			Level: 1.3589,
			Units: 'AUD / USD',
			Date: '08/19/2019',
			Change: 0.0020
		},
		{
			ID: 7,
			Country: 'NZD',
			Code: 'NZD',
			Currency: 'New Zealand Dollar',
			Level: 1.5218,
			Units: 'NZD / USD',
			Date: '08/19/2019',
			Change: -0.0036
		},
		{
			ID: 8,
			Country: 'SEK',
			Code: 'SEK',
			Currency: 'Swedish Krona',
			Level: 8.5280,
			Units: 'SEK / USD',
			Date: '08/19/2019',
			Change: 0.0016
		},
		{
			ID: 9,
			Country: 'NOK',
			Code: 'NOK',
			Currency: 'Norwegian Krone',
			Level: 8.2433,
			Units: 'NOK / USD',
			Date: '08/19/2019',
			Change: 0.0008
		},
		{
			ID: 10,
			Country: 'BRL',
			Code: 'BRL',
			Currency: 'Brazilian Real',
			Level: 3.4806,
			Units: 'BRL / USD',
			Date: '08/19/2019',
			Change: -0.0009
		},
		{
			ID: 11,
			Country: 'CNY',
			Code: 'CNY',
			Currency: 'Chinese Yuan',
			Level: 6.3961,
			Units: 'CNY / USD',
			Date: '08/19/2019',
			Change: 0.0004
		},
		{
			ID: 12,
			Country: 'RUB',
			Code: 'RUB',
			Currency: 'Russian Rouble',
			Level: 65.5980,
			Units: 'RUB / USD',
			Date: '08/19/2019',
			Change: 0.0059
		},
		{
			ID: 13,
			Country: 'INR',
			Code: 'INR',
			Currency: 'Indian Rupee',
			Level: 65.3724,
			Units: 'INR / USD',
			Date: '08/19/2019',
			Change: 0.0026
		},
		{
			ID: 14,
			Country: 'TRY',
			Code: 'TRY',
			Currency: 'New Turkish Lira',
			Level: 2.8689,
			Units: 'TRY / USD',
			Date: '08/19/2019',
			Change: 0.0092
		},
		{
			ID: 15,
			Country: 'THB',
			Code: 'THB',
			Currency: 'Thai Baht',
			Level: 35.5029,
			Units: 'THB / USD',
			Date: '08/19/2019',
			Change: 0.0044
		},
		{
			ID: 16,
			Country: 'IDR',
			Code: 'IDR',
			Currency: 'Indonesian Rupiah',
			Level: 13.83,
			Units: 'IDR / USD',
			Date: '08/19/2019',
			Change: -0.0009
		},
		{
			ID: 17,
			Country: 'MYR',
			Code: 'MYR',
			Currency: 'Malaysian Ringgit',
			Level: 4.0949,
			Units: 'MYR / USD',
			Date: '08/19/2019',
			Change: 0.0010
		},
		{
			ID: 18,
			Country: 'MXN',
			Code: 'MXN',
			Currency: 'Mexican New Peso',
			Level: 16.4309,
			Units: 'MXN / USD',
			Date: '08/19/2019',
			Change: 0.0017
		},
		{
			ID: 19,
			Country: 'ARS',
			Code: 'ARS',
			Currency: 'Argentinian Peso',
			Level: 9.2534,
			Units: 'ARS / USD',
			Date: '08/19/2019',
			Change: 0.0011
		},
		{
			ID: 20,
			Country: 'DKK',
			Code: 'DKK',
			Currency: 'Danish Krone',
			Level: 6.7417,
			Units: 'DKK / USD',
			Date: '08/19/2019',
			Change: 0.0025
		},
		{
			ID: 21,
			Country: 'ILS',
			Code: 'ILS',
			Currency: 'Israeli New Sheqel',
			Level: 3.8262,
			Units: 'ILS / USD',
			Date: '08/19/2019',
			Change: 0.0084
		},
		{
			ID: 22,
			Country: 'PHP',
			Code: 'PHP',
			Currency: 'Philippine Peso',
			Level: 46.3108,
			Units: 'PHP / USD',
			Date: '08/19/2019',
			Change: 0.0012
		},
	];

}
