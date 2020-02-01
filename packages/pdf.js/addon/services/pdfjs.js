/* globals pdfjsLib */
import Service from '@ember/service';

export default class extends Service {

	async load() {

		if (this.loader === undefined) {
			this.loader = new Promise( (resolve, reject) => {
				let script = document.createElement('script');
				script.onload = resolve;
				script.onerror = reject;
				script.src = '/assets/pdf.js';
				document.head.appendChild(script);
			});
		}

		await this.loader;

		pdfjsLib.GlobalWorkerOptions.workerSrc = '/assets/pdf-worker.js';

		return pdfjsLib;

	}

}
