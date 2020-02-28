import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';
import Chart from 'chart.js';

export default class extends Component {

	@computed('args.width')
	get width() {
		return this.args.width || '100%';
	}

	@computed('args.height')
	get height() {
		return this.args.height || '100%';
	}

	@action didCreate(element) {
		if (Chart) {
			this.chart = new Chart(element, {
				type: this.args.type,
				data: this.args.data,
				options: this.args.opts,
			});
		}
	}

	@action didChange() {
		if (Chart) {
			this.chart.config.data = this.args.data;
			this.chart.config.options = this.args.opts;
			this.chart.update();
		}
	}

	@action willDelete() {
		if (Chart) {
			this.chart.destroy();
		}
	}

}
