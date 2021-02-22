import Service from '@ember/service';
import config from '@ascua/config';

const VERSID = 1614030116;
const SCRIPT = config.rootURL + 'assets/pdfjs.js';
const WORKER = config.rootURL + 'assets/pdfjs-worker.js';

export default class extends Service {

	#loader = undefined;

	async load() {

		if (typeof FastBoot !== 'undefined') {
			return Promise.reject();
		}

		if (this.#loader === undefined) {

			Object.defineProperty(Array.prototype, '_super', {
				enumerable: false
			});

			this.#loader = new Promise( (resolve, reject) => {
				let script = document.createElement('script');
				script.onload = resolve;
				script.onerror = reject;
				script.src = SCRIPT;
				document.head.appendChild(script);
			});

			await this.#loader;

			window.pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER;

			return window.pdfjsLib;

		}

		if (this.#loader !== undefined) {

			await this.#loader;

			return window.pdfjsLib;

		}

	}

}
