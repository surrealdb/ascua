import Service from '@ember/service';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class Session extends Service {

	#ok = null;

	@inject store;

	@inject surreal;

	@tracked model = {};

	constructor() {

		super(...arguments);

		this.ready = new Promise(r => this.#ok = r);

		// Reset the model data when invalidated

		this.surreal.on('invalidated', () => {
			this.model = {};
		});

		// Reset the store data when invalidated

		this.surreal.on('invalidated', () => {
			this.store.reset();
		});

		// Start a new promise object when invalidated

		this.surreal.on('invalidated', () => {
			this.ready = new Promise(r => this.#ok = r);
		});

		// When authenticated

		this.surreal.on('authenticated', () => {
			this.surreal.info().then(info => {
				this.store.inject(info).then(model => {
					this.#ok(this.model = model);
				});
			});
		});

	}

}
