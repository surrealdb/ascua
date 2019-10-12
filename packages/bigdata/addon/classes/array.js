import EmberObject, { computed } from '@ember/object';
import EmberArray, { A } from '@ember/array';
import { task } from 'ember-concurrency';
import CompareMap from '../utils/compare-map';
import Range from './range';
import Item from './item';

export default EmberObject.extend(EmberArray, {

	limit: 100,

	total: null,

	items: computed(function() {
		return {};
	}).readOnly(),

	ranges: computed(function() {
		return new CompareMap();
	}).readOnly(),

	loading: computed('total', function() {
		return this.get('total') === null;
	}),

	length: computed('total', 'loading', {
		get() {
			return this.get('total');
		},
		set(key, value) {
			this.notifyPropertyChange('[]');
			return this.set('total', value);
		},
	}),

	init() {

		this._super(...arguments);

		this.fetchTotal();

		this.query.forEach(prop => {
			this.addObserver(`ctx.${prop}`, function() {
				this.reset();
			});
		});

	},

	reset() {

		this.conveyObjects().forEach(i => i.reset());

		this.get('fetchTask').cancelAll();

		this.fetchTotal();

	},

	objectAt(idx, fetch = false) {

		this._super(...arguments);

		switch (fetch) {
		case false:
			return this.sparseObjectAt(idx);
		case true:
			return this.returnObjectAt(idx);
		}

	},

	fetchTotal() {
		this.set('total', null);
		this.remoteObjectAt(0);
	},

	getRangeAt(rng) {
		let range = this.ranges.get(rng);
		return range ? range : this.setRangeAt(rng);
	},

	setRangeAt(rng) {
		let range = Range.create(rng);
		return this.ranges.set(rng, range);
	},

	conveyObjects() {
		let items = this.get('items');
		return Object.keys(items).map(idx => {
			return this.conveyObjectAt(idx);
		});
	},

	conveyObjectAt(idx) {
		return this.get(`items.${idx}`);
	},

	createObjectAt(idx) {
		this.get('items')[idx] = Item.create();
		return this.conveyObjectAt(idx);
	},

	sparseObjectAt(idx) {
		let item = this.conveyObjectAt(idx);
		return item ? item : this.createObjectAt(idx);
	},

	returnObjectAt(idx) {
		let item = this.sparseObjectAt(idx);
		return item.loaded ? item : this.remoteObjectAt(idx);
	},

	remoteObjectAt(idx) {

		let limit = this.limit;
		let index = Math.floor(idx / limit);
		let start = index * limit;

		this.get('fetchTask').perform({
			start: start,
			limit: limit,
		});

		return this.sparseObjectAt(idx);

	},

	prepareObectsAt(rng) {

		let { start, limit } = rng;

		for (let i = start; i < (start + limit); i++) {
			let item = this.sparseObjectAt(i);
			item.get('fetcher').perform();
		}

	},

	fulfillObjectsAt(rng, array) {

		let { start } = rng;

		for (let i = start; i < (start + array.length); i++) {
			let item = this.sparseObjectAt(i);
			if (item && typeof item.resolve === 'function') {
				item.resolve(array.objectAt(i-start));
			}
		}

	},

	declineObjectsAt(rng, error) {

		let { start, limit } = rng;

		for (let i = start; i < (start + limit); i++) {
			let item = this.sparseObjectAt(i);
			if (item && typeof item.reject === 'function') {
				item.reject(error);
			}
		}

	},

	fetchTask: task(function* (rng) {

		try {

			let range = this.getRangeAt(rng);

			let fetch = range.get('fetchTask');

			let array = yield fetch.perform(
				this.ctx,
				this.fetch,
				this.query,
			);

			let items = A(array.data);

			this.prepareObectsAt(rng);

			this.fulfillObjectsAt(rng, items);

			this.set('length', array.total);

		} catch (error) {

			this.prepareObectsAt(rng);

			this.declineObjectsAt(rng, error);

		}

		this.notifyPropertyChange('[]');

	}),

});
