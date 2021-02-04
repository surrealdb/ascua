import config from '@ascua/config';

export default class Stripe {

	static #loader = undefined;

	static #instance = undefined;

	static async load() {

		if (Stripe.#loader) return Stripe.#loader;

		if (typeof window === 'undefined') return;

		if (typeof FastBoot !== 'undefined') return;

		if (window && window.Stripe) return window.Stripe;

		return Stripe.#loader = new Promise( (resolve, reject) => {
			let script = document.createElement('script');
			script.src = 'https://js.stripe.com/v3/';
			script.onload = resolve;
			script.onerror = reject;
			script.async = false;
			script.defer = true;
			document.head.appendChild(script);
		});

	}

	static async setup(key, opts) {
		return Stripe.load().then( () => {
			return window.Stripe(key, opts);
		});
	}

	static get library() {
		return Stripe.load().then( () => {
			return window.Stripe;
		});
	}

	static get instance() {
		return Stripe.load().then( () => {
			return this.#instance = this.#instance || window.Stripe(
				config.stripe.publishableKey
			);
		});
	}

}
