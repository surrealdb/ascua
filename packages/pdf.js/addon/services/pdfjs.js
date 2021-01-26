/* globals pdfjsLib */
import Service from '@ember/service';
import { inject } from '@ember/service';

export default class extends Service {

	@inject router;

	async load() {

		let base = `${this.router.rootURL}/assets`.replace(/\/\/+/g, '/');

		if (this.loader === undefined) {

			this.loader = new Promise( (resolve, reject) => {
				let script = document.createElement('script');
				script.onload = resolve;
				script.onerror = reject;
				script.src = `${base}/pdfjs.js`;
				document.head.appendChild(script);
			});

			await this.loader;

			pdfjsLib.GlobalWorkerOptions.workerSrc = `${base}/pdfjs-worker.js`;

			return pdfjsLib;

		}

		if (this.loader !== undefined) {

			await this.loader;

			return pdfjsLib;

		}

	}

}
