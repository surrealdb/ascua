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
		return Object.assign({}, {
			series: this.args.data
		}, this.args.opts);
	}

	@action didCreate(element) {
		this.chart = new Chart(element, this.initial);
		this.chart.render();
	}

	@action didChange() {
		this.chart.updateOptions(this.args.opts);
		this.chart.updateSeries(this.args.data);
	}

	@action willDelete() {
		this.chart.destroy();
	}

}
