import Property from './property';
import Field from '@ascua/surreal/field';
import { assert } from '@ember/debug';
import { setProperties } from '@ember/object';

export default function(type) {
	return Property({
		get(key) {

			let model = this.store.lookup(type);

			if (model && model.class.prototype instanceof Field) {
				return this.data[key] = this.data[key] || model.create({ parent: this });
			}

			assert('An embedded object must be of type Field');

		},
		set(key, value={}) {

			let model = this.store.lookup(type);

			if (model && model.class.prototype instanceof Field) {
				switch (true) {
				case this.data[key] !== undefined:
					setProperties(this.data[key], value);
					return this.data[key];
				case this.data[key] === undefined:
					return this.data[key] = model.create({ ...value, parent: this });
				}
			}

			assert('An embedded object must be of type Field');

		},
	});
}
