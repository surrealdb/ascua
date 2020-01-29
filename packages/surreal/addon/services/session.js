import Service from '@ember/service';
import { inject } from '@ember/service';

export default class Session extends Service {

	@inject surreal;

	@inject store;

	constructor() {

		super(...arguments);

		this.surreal.on('invalidated', () => {
			this.store.reset();
		});

		this.surreal.on('authenticated', () => {
			this.surreal.info().then(async info => {
				this.model = await this.store.inject(info);
			});
		});

	}

}
