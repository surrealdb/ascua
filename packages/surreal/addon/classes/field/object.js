import { computed } from '@ember/object';
import Model from '@ascua/surreal/model';
import Field from '@ascua/surreal/field';
import { assert } from '@ember/debug';

export default function(type) {
	return computed({
		get(key) {

			let model = this.store.lookup(type);

			switch (true) {
			case model && model.class.prototype instanceof Model:
				assert('An embedded object must be of type Field');
			case model && model.class.prototype instanceof Field:
				let fields = Object.assign({}, { _parent: this });
				return this.data[key] = this.data[key] || model.create(fields);
			default:
				assert('An embedded object must be of type Field');
			}

		},
		set(key, value={}) {

			let model = this.store.lookup(type);

			switch (true) {
			case model && model.class.prototype instanceof Model:
				assert('An embedded object must be of type Field');
			case model && model.class.prototype instanceof Field:
				let fields = Object.assign({}, value, { _parent: this });
				return this.data[key] = model.create(fields);
			default:
				assert('An embedded object must be of type Field');
			}

		}
	});
}
