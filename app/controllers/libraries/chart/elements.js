import Controller from '@ember/controller';

export default class extends Controller {

	normal = {
		data: {
			labels: ["Red","Blue","Yellow","Green","Purple","Orange"],
			datasets: [{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.75)",
					"rgba(54, 162, 235, 0.75)",
					"rgba(255, 206, 86, 0.75)",
					"rgba(75, 192, 192, 0.75)",
					"rgba(153, 102, 255, 0.75)",
					"rgba(255, 159, 64, 0.75)",
				],
				borderColor: [
					"rgba(255,99,132,1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				]
			}]
		},
		opts: {
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					fontColor: "rgb(120, 120, 120)",
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					}
				}]
			},
		}
	};

	circle = {
		data: {
			labels: ["Red","Blue","Yellow","Green","Purple","Orange"],
			datasets: [{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.75)",
					"rgba(54, 162, 235, 0.75)",
					"rgba(255, 206, 86, 0.75)",
					"rgba(75, 192, 192, 0.75)",
					"rgba(153, 102, 255, 0.75)",
					"rgba(255, 159, 64, 0.75)",
				],
				borderColor: [
					"rgba(255,99,132,1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				]
			}]
		},
		opts: {
			maintainAspectRatio: false,
			legend: {
				display: true,
				position: 'right',
				labels: {
					fontColor: "rgb(120, 120, 120)",
				}
			},
		}
	};

	bubble = {
		data: {
			labels: ["Red","Blue","Yellow","Green"],
			datasets: [
				{
					label: "# of Votes",
					data: [
						{ x:13, y:16, r:20 },
						{ x:22, y:7, r:10 },
						{ x:7, y:9, r:5 },
						{ x:8, y:18, r:5 },
						{ x:14, y:12, r:18 },
						{ x:18, y:4, r:7 },
					],
					backgroundColor: [
						"rgba(255, 99, 132, 0.75)",
						"rgba(54, 162, 235, 0.75)",
						"rgba(255, 206, 86, 0.75)",
						"rgba(75, 192, 192, 0.75)",
					],
					borderColor: [
						"rgba(255,99,132,1)",
						"rgba(54, 162, 235, 1)",
						"rgba(255, 206, 86, 1)",
						"rgba(75, 192, 192, 1)",
					],
				},
				{
					label: "Age of voters",
					data: [
						{ x:10, y:12, r:20 },
						{ x:16, y:12, r:10 },
						{ x:8, y:14, r:37 },
						{ x:12, y:10, r:19 },
						{ x:14, y:6, r:13 },
						{ x:14, y:12, r:18 },
						{ x:18, y:4, r:7 },
					],
				},
			]
		},
		opts: {
			maintainAspectRatio: false,
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					fontColor: "rgb(120, 120, 120)",
				}
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true,
					}
				}]
			},
		}
	};

}
