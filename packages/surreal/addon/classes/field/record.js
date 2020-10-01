import Property from './property';
import Record from '../types/record';
import Model from '@ascua/surreal/model';

export default function(type) {
	return Property({
		get(key) {

			let value = this.data[key];

			switch (true) {
			case value === null:
				return this.data[key];
			case value === undefined:
				return this.data[key];
			case value instanceof Record:
				return this.data[key];
			default:
				return this.data[key] = Record.initiate({
					id: value, future: () => this.store.select(type, value)
				});
			}

		},
		set(key, value) {

			switch (true) {
			case value === null:
				return this.data[key] = value;
			case value === undefined:
				return this.data[key] = value;
			case value instanceof Record:
				return this.data[key] = value;
			case value === String(this.data[key]):
				return this.data[key] = this.data[key];
			case value instanceof Model:
				return this.data[key] = Record.initiate({
					id: value.id, promise: Promise.resolve(value),
				});
			case value instanceof Object:
				return this.data[key] = Record.initiate({
					id: value.id, promise: this.store.inject(value),
				});
			default:
				return this.data[key] = Record.initiate({
					id: value, future: () => this.store.select(type, value)
				});
			}

		},
	});
}
