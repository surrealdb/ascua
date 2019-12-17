import Item from './item';
import context from '@ascua/context';

const FETCH = function() {
	return [];
};

export default class extends Array {

	limit = 0;

	fetch = 0;

	constructor(limit, fetch = FETCH) {

		super();

		this.limit = limit;
		this.fetch = fetch;

		this.reset();

	}

	objectAt(idx) {
		if (idx === this.length-1) {
			this.loadmore(idx+1);
		}
		return this[idx];
	}

	reset() {
		this.length = 0;
		this.notifyPropertyChange('[]');
		this.loadmore(0);
	}

	loadmore(idx) {

		let limit = this.limit;
		let index = Math.floor(idx / limit);
		let start = index * limit;
		let props = { start, limit };

		this.fetcher(props);

	}

	fulfillObjectsAt({ start, limit }, array) {
		for (let i = start; i < (start + array.length); i++) {
			this[i] = array.objectAt(i-start);
		}
	}

	async fetcher(rng) {

		try {

			let [ctx] = context.withCancel();

			let array = await this.fetch(ctx, rng);

			let items = [].concat(array);

			this.fulfillObjectsAt(rng, items);

			this.length = rng.start + items.length;

		} catch (error) {

			// Ignore

		}

		this.notifyPropertyChange('[]');

	}

}
