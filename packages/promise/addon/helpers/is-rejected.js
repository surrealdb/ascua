import Await from './await';

export default class extends Await {

	constructor() {
		super(...arguments);
		this.value = false;
	}

	async process(promise) {
		try {
			await promise;
			this.value = false;
		} catch(e) {
			try {
				this.value = true;
			} catch(e) {
				// Helper is no longer being rendered
			}
		}
	}

}
