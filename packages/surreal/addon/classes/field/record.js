import Property from './property';
import Record from '../types/record';
import Model from '@ascua/surreal/model';
import { RECORD } from '../model';

export default function(type) {
	return Property({
		get(key) {

			let value = this[RECORD].data[key];

			switch (true) {
			case value === null:
				return this[RECORD].data[key];
			case value === undefined:
				return this[RECORD].data[key];
			case value instanceof Record:
				return this[RECORD].data[key];
			default:
				let cached = this.store.cached(type, value);
				if (cached) {
					return this[RECORD].data[key] = this.store.proxy({
						id: value, promise: cached,
					});
				} else {
					return this[RECORD].data[key] = this.store.proxy({
						id: value, future: () => this.store.select(type, value)
					});
				}
			}

		},
		set(key, value) {

			switch (true) {
			case value === null:
				return this[RECORD].data[key] = value;
			case value === undefined:
				return this[RECORD].data[key] = value;
			case value instanceof Record:
				return this[RECORD].data[key] = value;
			case value === String(this[RECORD].data[key]):
				return this[RECORD].data[key] = this[RECORD].data[key];
			case value instanceof Model:
				return this[RECORD].data[key] = this.store.proxy({
					id: value.id, promise: value,
				});
			case value instanceof Object:
				return this[RECORD].data[key] = this.store.proxy({
					id: value.id, promise: this.store.inject(value),
				});
			default:
				let cached = this.store.cached(type, value);
				if (cached) {
					return this[RECORD].data[key] = this.store.proxy({
						id: value, promise: cached,
					});
				} else {
					return this[RECORD].data[key] = this.store.proxy({
						id: value, future: () => this.store.select(type, value)
					});
				}
			}

		},
	});
}
