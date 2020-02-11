import Controller from '@ember/controller';

function generateData(count, min, max) {
	var i = 0;
	var series = [];
	while (i < count) {
		var x = 'w' + (i + 1).toString();
		var y = Math.floor(Math.random() * (max - min + 1)) + min;
		series.push({
			x: x,
			y: y
		});
		i++;
	}
	return series;
}

export default class extends Controller {

	line = {
		series: [{
			name: "Session Duration",
			data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
		},
		{
			name: "Page Views",
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
		},
		{
			name: 'Total Visits',
			data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
		}],
		chart: {
			height: '100%',
			type: 'line',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: false
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: [5, 7, 5],
			curve: 'straight',
			dashArray: [0, 8, 5]
		},
		legend: {
			tooltipHoverFormatter: function(val, opts) {
				return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
			}
		},
		markers: {
			size: 0,
			hover: {
				sizeOffset: 6
			}
		},
		xaxis: {
			categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
			'10 Jan', '11 Jan', '12 Jan'
			],
		},
		tooltip: {
			y: [{
				title: {
					formatter: function (val) {
						return val + " (mins)"
					}
				}
			},
			{
				title: {
					formatter: function (val) {
						return val + " per session"
					}
				}
			},
			{
				title: {
					formatter: function (val) {
						return val;
					}
				}
			}]
		},
		grid: {
			borderColor: '#f1f1f1',
		}
	};

	column = {
		series: [{
			name: 'Net Profit',
			data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
		}, {
			name: 'Revenue',
			data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
		}, {
			name: 'Free Cash Flow',
			data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
		}],
		chart: {
			type: 'bar',
			height: '100%',
			toolbar: {
				show: false
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '55%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent']
		},
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
		},
		yaxis: {
			title: {
				text: '$ (thousands)'
			}
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			y: {
				formatter: function (val) {
					return "£" + val + " thousand"
				}
			}
		}
	};

	bar = {
		series: [{
			name: 'Males',
			data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
			3.9, 3.5, 3
			]
		},
		{
			name: 'Females',
			data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
			-4.1, -4, -4.1, -3.4, -3.1, -2.8
			]
		}],
		chart: {
			type: 'bar',
			height: '100%',
			stacked: true,
			toolbar: {
				show: false
			},
		},
		colors: ['#008FFB', '#FF4560'],
		plotOptions: {
			bar: {
				horizontal: true,
				barHeight: '80%',
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 1,
			colors: ["#fff"]
		},
		grid: {
			xaxis: {
				showLines: false
			}
		},
		yaxis: {
			min: -5,
			max: 5,
			title: {
				text: 'Age',
			},
		},
		tooltip: {
			shared: false,
			x: {
				formatter: function (val) {
					return val
				}
			},
			y: {
				formatter: function (val) {
					return Math.abs(val) + "%"
				}
			}
		},
		title: {
			text: 'Mauritius population pyramid 2011'
		},
		xaxis: {
			categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
			'45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
			'0-4'
			],
			title: {
				text: 'Percent'
			},
			labels: {
				formatter: function (val) {
					return Math.abs(Math.round(val)) + "%"
				}
			}
		},
	};

	mixed = {
		series: [{
			name: 'TEAM A',
			type: 'column',
			data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
		}, {
			name: 'TEAM B',
			type: 'area',
			data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
		}, {
			name: 'TEAM C',
			type: 'line',
			data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
		}],
		chart: {
			height: '100%',
			type: 'line',
			stacked: false,
			toolbar: {
				show: false
			},
		},
		stroke: {
			width: [0, 2, 5],
			curve: 'smooth'
		},
		plotOptions: {
			bar: {
				columnWidth: '50%'
			}
		},
		fill: {
			opacity: [0.85, 0.25, 1],
			gradient: {
				inverseColors: false,
				shade: 'light',
				type: "vertical",
				opacityFrom: 0.85,
				opacityTo: 0.55,
				stops: [0, 100, 100, 100]
			}
		},
		labels: [
		'01/01/2003',
		'02/01/2003',
		'03/01/2003',
		'04/01/2003',
		'05/01/2003',
		'06/01/2003',
		'07/01/2003',
		'08/01/2003',
		'09/01/2003',
		'10/01/2003',
		'11/01/2003'
		],
		markers: {
			size: 0
		},
		xaxis: {
			type: 'datetime'
		},
		yaxis: {
			title: {
				text: 'Points',
			},
			min: 0
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				formatter: function (y) {
					if (typeof y !== "undefined") {
						return y.toFixed(0) + " points";
					}
					return y;

				}
			}
		}
	};

	candlestick = {
		series: [{
			data: [{
				x: new Date(1538778600000),
				y: [6629.81, 6650.5, 6623.04, 6633.33]
			},
			{
				x: new Date(1538780400000),
				y: [6632.01, 6643.59, 6620, 6630.11]
			},
			{
				x: new Date(1538782200000),
				y: [6630.71, 6648.95, 6623.34, 6635.65]
			},
			{
				x: new Date(1538784000000),
				y: [6635.65, 6651, 6629.67, 6638.24]
			},
			{
				x: new Date(1538785800000),
				y: [6638.24, 6640, 6620, 6624.47]
			},
			{
				x: new Date(1538787600000),
				y: [6624.53, 6636.03, 6621.68, 6624.31]
			},
			{
				x: new Date(1538789400000),
				y: [6624.61, 6632.2, 6617, 6626.02]
			},
			{
				x: new Date(1538791200000),
				y: [6627, 6627.62, 6584.22, 6603.02]
			},
			{
				x: new Date(1538793000000),
				y: [6605, 6608.03, 6598.95, 6604.01]
			},
			{
				x: new Date(1538794800000),
				y: [6604.5, 6614.4, 6602.26, 6608.02]
			},
			{
				x: new Date(1538796600000),
				y: [6608.02, 6610.68, 6601.99, 6608.91]
			},
			{
				x: new Date(1538798400000),
				y: [6608.91, 6618.99, 6608.01, 6612]
			},
			{
				x: new Date(1538800200000),
				y: [6612, 6615.13, 6605.09, 6612]
			},
			{
				x: new Date(1538802000000),
				y: [6612, 6624.12, 6608.43, 6622.95]
			},
			{
				x: new Date(1538803800000),
				y: [6623.91, 6623.91, 6615, 6615.67]
			},
			{
				x: new Date(1538805600000),
				y: [6618.69, 6618.74, 6610, 6610.4]
			},
			{
				x: new Date(1538807400000),
				y: [6611, 6622.78, 6610.4, 6614.9]
			},
			{
				x: new Date(1538809200000),
				y: [6614.9, 6626.2, 6613.33, 6623.45]
			},
			{
				x: new Date(1538811000000),
				y: [6623.48, 6627, 6618.38, 6620.35]
			},
			{
				x: new Date(1538812800000),
				y: [6619.43, 6620.35, 6610.05, 6615.53]
			},
			{
				x: new Date(1538814600000),
				y: [6615.53, 6617.93, 6610, 6615.19]
			},
			{
				x: new Date(1538816400000),
				y: [6615.19, 6621.6, 6608.2, 6620]
			},
			{
				x: new Date(1538818200000),
				y: [6619.54, 6625.17, 6614.15, 6620]
			},
			{
				x: new Date(1538820000000),
				y: [6620.33, 6634.15, 6617.24, 6624.61]
			},
			{
				x: new Date(1538821800000),
				y: [6625.95, 6626, 6611.66, 6617.58]
			},
			{
				x: new Date(1538823600000),
				y: [6619, 6625.97, 6595.27, 6598.86]
			},
			{
				x: new Date(1538825400000),
				y: [6598.86, 6598.88, 6570, 6587.16]
			},
			{
				x: new Date(1538827200000),
				y: [6588.86, 6600, 6580, 6593.4]
			},
			{
				x: new Date(1538829000000),
				y: [6593.99, 6598.89, 6585, 6587.81]
			},
			{
				x: new Date(1538830800000),
				y: [6587.81, 6592.73, 6567.14, 6578]
			},
			{
				x: new Date(1538832600000),
				y: [6578.35, 6581.72, 6567.39, 6579]
			},
			{
				x: new Date(1538834400000),
				y: [6579.38, 6580.92, 6566.77, 6575.96]
			},
			{
				x: new Date(1538836200000),
				y: [6575.96, 6589, 6571.77, 6588.92]
			},
			{
				x: new Date(1538838000000),
				y: [6588.92, 6594, 6577.55, 6589.22]
			},
			{
				x: new Date(1538839800000),
				y: [6589.3, 6598.89, 6589.1, 6596.08]
			},
			{
				x: new Date(1538841600000),
				y: [6597.5, 6600, 6588.39, 6596.25]
			},
			{
				x: new Date(1538843400000),
				y: [6598.03, 6600, 6588.73, 6595.97]
			},
			{
				x: new Date(1538845200000),
				y: [6595.97, 6602.01, 6588.17, 6602]
			},
			{
				x: new Date(1538847000000),
				y: [6602, 6607, 6596.51, 6599.95]
			},
			{
				x: new Date(1538848800000),
				y: [6600.63, 6601.21, 6590.39, 6591.02]
			},
			{
				x: new Date(1538850600000),
				y: [6591.02, 6603.08, 6591, 6591]
			},
			{
				x: new Date(1538852400000),
				y: [6591, 6601.32, 6585, 6592]
			},
			{
				x: new Date(1538854200000),
				y: [6593.13, 6596.01, 6590, 6593.34]
			},
			{
				x: new Date(1538856000000),
				y: [6593.34, 6604.76, 6582.63, 6593.86]
			},
			{
				x: new Date(1538857800000),
				y: [6593.86, 6604.28, 6586.57, 6600.01]
			},
			{
				x: new Date(1538859600000),
				y: [6601.81, 6603.21, 6592.78, 6596.25]
			},
			{
				x: new Date(1538861400000),
				y: [6596.25, 6604.2, 6590, 6602.99]
			},
			{
				x: new Date(1538863200000),
				y: [6602.99, 6606, 6584.99, 6587.81]
			},
			{
				x: new Date(1538865000000),
				y: [6587.81, 6595, 6583.27, 6591.96]
			},
			{
				x: new Date(1538866800000),
				y: [6591.97, 6596.07, 6585, 6588.39]
			},
			{
				x: new Date(1538868600000),
				y: [6587.6, 6598.21, 6587.6, 6594.27]
			},
			{
				x: new Date(1538870400000),
				y: [6596.44, 6601, 6590, 6596.55]
			},
			{
				x: new Date(1538872200000),
				y: [6598.91, 6605, 6596.61, 6600.02]
			},
			{
				x: new Date(1538874000000),
				y: [6600.55, 6605, 6589.14, 6593.01]
			},
			{
				x: new Date(1538875800000),
				y: [6593.15, 6605, 6592, 6603.06]
			},
			{
				x: new Date(1538877600000),
				y: [6603.07, 6604.5, 6599.09, 6603.89]
			},
			{
				x: new Date(1538879400000),
				y: [6604.44, 6604.44, 6600, 6603.5]
			},
			{
				x: new Date(1538881200000),
				y: [6603.5, 6603.99, 6597.5, 6603.86]
			},
			{
				x: new Date(1538883000000),
				y: [6603.85, 6605, 6600, 6604.07]
			},
			{
				x: new Date(1538884800000),
				y: [6604.98, 6606, 6604.07, 6606]
			},
			]
		}],
		chart: {
			type: 'candlestick',
			height: '100%',
			toolbar: {
				show: false
			},
		},
		xaxis: {
			type: 'datetime'
		},
		yaxis: {
			tooltip: {
				enabled: true
			}
		}
	};

	scatter = {
		series: [{
			name: "SAMPLE A",
			data: [
			[16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
		},{
			name: "SAMPLE B",
			data: [
			[36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
		},{
			name: "SAMPLE C",
			data: [
			[21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
		}],
		chart: {
			height: '100%',
			type: 'scatter',
			zoom: {
				enabled: true,
				type: 'xy'
			},
			toolbar: {
				show: false
			},
		},
		xaxis: {
			tickAmount: 10,
			labels: {
				formatter: function(val) {
					return parseFloat(val).toFixed(1)
				}
			}
		},
		yaxis: {
			tickAmount: 7
		}
	};

	heatmap = {
		series: [{
			name: 'Metric1',
			data: generateData(18, 0, 90),
		},
		{
			name: 'Metric2',
			data: generateData(18, 0, 90),
		},
		{
			name: 'Metric3',
			data: generateData(18, 0, 90),
		},
		{
			name: 'Metric4',
			data: generateData(18, 0, 90),
		},
		{
			name: 'Metric5',
			data: generateData(18, 0, 90),
		},
		{
			name: 'Metric6',
			data: generateData(18, 0, 90),
		},
		{
			name: 'Metric7',
			data: generateData(18, 0, 90),
		},
		{
			name: 'Metric8',
			data: generateData(18, 0, 90),
		},
		{
			name: 'Metric9',
			data: generateData(18, 0, 90),
		}
		],
		chart: {
			height: '100%',
			type: 'heatmap',
			toolbar: {
				show: false,
			}
		},
		dataLabels: {
			enabled: false
		},
		colors: ["#008FFB"],
	};

	pie = {
		series: [44, 55, 41, 17, 15],
		chart: {
			height: '100%',
			type: 'pie',
			toolbar: {
				show: false
			},
		},
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					width: 200
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};

	donut = {
		series: [44, 55, 41, 17, 15],
		chart: {
			height: '100%',
			type: 'donut',
			toolbar: {
				show: false
			},
		},
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					width: 200
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};

	radial = {
		series: [76, 67, 61, 90],
		chart: {
			height: '100%',
			type: 'radialBar',
			toolbar: {
				show: false
			},
		},
		plotOptions: {
			radialBar: {
				offsetY: 0,
				startAngle: 0,
				endAngle: 270,
				hollow: {
					margin: 5,
					size: '30%',
					background: 'transparent',
					image: undefined,
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						show: false,
					}
				}
			}
		},
		colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
		labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
		legend: {
			show: true,
			floating: true,
			fontSize: '16px',
			position: 'left',
			offsetX: 160,
			offsetY: 10,
			labels: {
				useSeriesColors: true,
			},
			markers: {
				size: 0
			},
			formatter: function(seriesName, opts) {
				return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
				horizontal: 3,
			}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false
				}
			}
		}]
	};

	gauge = {
		series: [76],
		chart: {
			type: 'radialBar',
			offsetY: -20,
			toolbar: {
				show: false
			},
		},
		plotOptions: {
			radialBar: {
				startAngle: -90,
				endAngle: 90,
				track: {
					background: "#e7e7e7",
					strokeWidth: '97%',
					margin: 5,
					shadow: {
						enabled: true,
						top: 2,
						left: 0,
						color: '#999',
						opacity: 1,
						blur: 2
					}
				},
				dataLabels: {
					name: {
						show: false
					},
					value: {
						offsetY: -2,
						fontSize: '22px'
					}
				}
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				shadeIntensity: 0.4,
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 50, 53, 91]
			},
		},
		labels: ['Average Results'],
	};

	radar = {
		series: [{
			name: 'Series 1',
			data: [20, 100, 40, 30, 50, 80, 33],
		}],
		chart: {
			height: '100%',
			type: 'radar',
			toolbar: {
				show: false
			},
		},
		dataLabels: {
			enabled: true
		},
		plotOptions: {
			radar: {
				size: 140,
				polygons: {
					strokeColor: '#e9e9e9',
					fill: {
						colors: ['#f8f8f8', '#fff']
					}
				}
			}
		},
		colors: ['#FF4560'],
		markers: {
			size: 4,
			colors: ['#fff'],
			strokeColor: '#FF4560',
			strokeWidth: 2,
		},
		tooltip: {
			y: {
				formatter: function(val) {
					return val
				}
			}
		},
		xaxis: {
			categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
		},
		yaxis: {
			tickAmount: 7,
			labels: {
				formatter: function(val, i) {
					if (i % 2 === 0) {
						return val
					} else {
						return ''
					}
				}
			}
		}
	};

}
