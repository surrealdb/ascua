import { computed } from '@ember/object';
import Record from '../types/record';
import Model from '@ascua/surreal/model';

export default function(type) {
	return computed({
		get(key) {
			return this.data[key];
		},
		set(key, value) {

			if (value instanceof Model) {
				value = String(value);
			}

			switch (value) {
			case undefined:
				return this.data[key] = undefined;
			default:
				return this.data[key] = Record.create({
					id: value, promise: this.store.select(type, value),
				});
			}

		}
	});
}
