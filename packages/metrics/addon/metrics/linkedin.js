import Metric from './base';

export default class extends Metric {

	name = 'linkedin';

	trackPage() {

		if (!this.config.id) return;

		const now = Date.now();
		const url = encodeURIComponent(window.location.href);

		const img = new Image();
		img.src = `https://px.ads.linkedin.com/collect/?v=2&fmt=js&pid=${this.config.id}&time=${now}&url=${url}`;

	}

	trackEvent(id) {

		if (!id) return

		if (!this.config.id) return;

		const now = Date.now();
		const url = encodeURIComponent(window.location.href);

		const img = new Image();
		img.src = `https://px.ads.linkedin.com/collect/?v=2&fmt=js&pid=${this.config.id}&conversionId=${id}&time=${now}&url=${url}`;

	}

}
