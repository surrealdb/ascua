import Item from './item';
import Range from './range';
import { tracked } from '@glimmer/tracking';

const FETCH = function() {
	return { data: [], total: 0 };
};

export default class extends Array {

	limit = 0;

	total = 0;

	fetch = 0;

	ranges = {};

	@tracked loaded = false;

	constructor(limit, fetch = FETCH) {

		super();

		this.limit = limit;
		this.fetch = fetch;

		this.reset();

	}

	objectAt(idx, fetch = false) {
		switch (fetch) {
		case false:
			return this.sparseObjectAt(idx);
		case true:
			return this.returnObjectAt(idx);
		}
	}

	reset() {
		this.total = 0;
		this.length = 0;
		this.loaded = false;
		this.notifyPropertyChange('[]');
		this.remoteObjectAt(0);
	}

	range(rng) {
		return this.ranges[rng.start] ?
			this.ranges[rng.start] :
			this.ranges[rng.start] = new Range(rng)
		;
	}

	sparseObjectAt(idx) {
		return this[idx] = this[idx] || Item.create();
	}

	returnObjectAt(idx) {
		let item = this.sparseObjectAt(idx);
		return item.content ? item : this.remoteObjectAt(idx);
	}

	remoteObjectAt(idx) {

		let limit = this.limit;
		let index = Math.floor(idx / limit);
		let start = index * limit;
		let props = { start, limit };

		if (start < this.length) {
			props.start = this.length;
		}

		let range = this.range(props);

		this.fetcher(props);

		return this[idx];

	}

	prepareObectsAt({ start, limit }) {
		for (let i = start; i < (start + limit); i++) {
			this[i] = this[i] || Item.create();
			this[i].setup();
		}
	}

	fulfillObjectsAt({ start, limit }, array) {
		for (let i = start; i < (start + array.length); i++) {
			if (this[i] && typeof this[i].resolve === 'function') {
				this[i].resolve(array.objectAt(i-start));
			}
		}
	}

	declineObjectsAt({ start, limit }, error) {
		for (let i = start; i < (start + limit); i++) {
			if (this[i] && typeof this[i].reject === 'function') {
				this[i].reject(error);
			}
		}
	}

	async fetcher(rng) {

		try {

			let range = this.range(rng);

			let array = await range.fetch(this.fetch);

			let items = [].concat(array.data);

			this.prepareObectsAt(rng);

			this.fulfillObjectsAt(rng, items);

			this.length = array.total;

			this.total = array.total;

			this.loaded = true;

		} catch (error) {

			if (this.total) {

				this.prepareObectsAt(rng);

				this.declineObjectsAt(rng, error);

			}

		}

		this.notifyPropertyChange('[]');

	}

}
