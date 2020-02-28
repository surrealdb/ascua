import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';
import Chart from 'apexcharts.js';

export default class extends Component {

	@computed('args.width')
	get width() {
		return this.args.width || '100%';
	}

	@computed('args.height')
	get height() {
		return this.args.height || '100%';
	}

	@computed('args.{data,opts}')
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
