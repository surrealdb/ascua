import Service from '@ember/service';
import config from '@ascua/config';

const defaults = {
	xfbml: false,
	version: 'v9.0',
	autoLogAppEvents: true,
	appId: '370958264110114',
};

export default class extends Service {

	#config = undefined;

	#loader = undefined;

	constructor() {

		super(...arguments);

		this.#config = Object.assign({}, defaults, config.facebook);

	}

	async load() {

		if (typeof FastBoot !== 'undefined') {
			return Promise.reject();
		}

		if (this.#loader === undefined) {

			this.#loader = new Promise( (resolve, reject) => {
				let script = document.createElement('script');
				script.onload = resolve;
				script.onerror = reject;
				script.src = 'https://connect.facebook.net/en_GB/sdk.js';
				script.nonce = Math.random().toString(36).substring(7);
				script.crossorigin = 'anonymous';
				script.defer = true;
				script.async = true;
				document.head.appendChild(script);
			});

			await this.#loader;

			window.FB.init(this.#config);

			return window.FB;

		}

		if (this.#loader !== undefined) {

			await this.#loader;

			return window.FB;

		}

	}

}
