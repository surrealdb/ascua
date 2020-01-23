import Record from '../types/record';
import Model from '@ascua/surreal/model';

export default function(type) {
	return (target, key, desc) => {
		return {
			configurable: true,
			enumerable: true,
			get() {

				let value = this.data[key];

				switch (true) {
				case typeof value === "undefined":
					return this.data[key];
				case value instanceof Record:
					return this.data[key];
				default:
					return this.data[key] = Record.create({
						id: value, promise: this.store.select(type, value),
					});
				}

			},
			set(value) {

				if (value instanceof Model) {
					value = String(value);
				}

				this.data[key] = value;

			}
		}
	}
}
