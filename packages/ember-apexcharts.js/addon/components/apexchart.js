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
		return Object.assign({}, this.args.opts, {
			series: this.args.data
		});
	}

	@action didInsert(element) {
		this.chart = new Chart(element, this.initial);
		this.chart.render();
	}

	@action didUpdate() {
		this.chart.updateOptions(this.args.opts);
		this.chart.updateSeries(this.args.data);
	}

	@action willDestroy() {
		this.chart.destroy();
	}

}
