import Component from '@glimmer/component';
import { action } from '@ember/object';
import Chart from 'apexcharts.js';

export default class extends Component {

	get width() {
		return this.args.width || '100%';
	}

	get height() {
		return this.args.height || '100%';
	}

	get initial() {
		let data = { series: this.args.data };
		return Object.assign({}, data, this.args.opts);
	}

	@action didCreate(element) {
		if (Chart) {
			this.chart = new Chart(element, this.initial);
			this.chart.render();
		}
	}

	@action didChange() {
		if (Chart) {
			this.chart.updateOptions(this.args.opts);
			this.chart.updateSeries(this.args.data);
		}
	}

	@action willDelete() {
		if (Chart) {
			this.chart.destroy();
		}
	}

}
