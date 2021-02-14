import Metric from './base';

export default class extends Metric {

	name = 'linkedin';

	trackPage() {

		if (!this.config.id) return;

		const img = new Image();
		img.src = `https://dc.ads.linkedin.com/collect/?pid=${this.config.id}&fmt=gif`;

	}

	trackEvent(id) {

		if (!id) return

		if (!this.config.id) return;

		const img = new Image();
		img.src = `https://dc.ads.linkedin.com/collect/?pid=${this.config.id}&conversionId=${id}&fmt=gif`;

	}

}
