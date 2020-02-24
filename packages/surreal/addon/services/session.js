import Service from '@ember/service';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class Session extends Service {

	@inject surreal;

	@inject store;

	@tracked model = {};

	constructor() {

		super(...arguments);

		this.surreal.on('invalidated', () => {
			this.store.reset(); this.model = {};
		});

		this.surreal.on('authenticated', () => {
			this.surreal.info().then(async info => {
				this.model = await this.store.inject(info);
			});
		});

	}

}
