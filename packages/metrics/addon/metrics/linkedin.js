import Metric from './base';

export default class extends Metric {

	name = 'linkedin';

	trackPage() {

		if (!this.config.id) return;

		const now = Date.now();
		const img = new Image();
		img.src = `https://px.ads.linkedin.com/collect/?pid=${this.config.id}&time=${now}&fmt=gif`;

	}

	trackEvent(id) {

		if (!id) return

		if (!this.config.id) return;

		const now = Date.now();
		const img = new Image();
		img.src = `https://px.ads.linkedin.com/collect/?pid=${this.config.id}&conversionId=${id}&time=${now}&fmt=gif`;

	}

}
