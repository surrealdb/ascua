import { computed } from '@ember/object';
import Array from '../types/array';
import Any from '../types/any';
import String from '../types/string';
import Number from '../types/number';
import Boolean from '../types/boolean';
import Datetime from '../types/datetime';
import Record from '../types/record';
import Model from '@ascua/surreal/model';
import Field from '@ascua/surreal/field';
import { assert } from '@ember/debug';

export default function(type) {
	return (target, key, desc) => {
		return {
			configurable: true,
			enumerable: true,
			get() {

				switch (type) {
				case undefined:
					return this.data[key] = this.data[key] || new Array(this, Any);
				case 'string':
					return this.data[key] = this.data[key] || new Array(this, String);
				case 'number':
					return this.data[key] = this.data[key] || new Array(this, Number);
				case 'boolean':
					return this.data[key] = this.data[key] || new Array(this, Boolean);
				case 'datetime':
					return this.data[key] = this.data[key] || new Array(this, Datetime);
				default:

					let value = this.data[key] || [];

					let model = this.store.lookup(type);

					if (model && model.class.prototype instanceof Field) {
						return this.data[key] = this.data[key] || new Array(this, (v) => {
							let fields = Object.assign({}, v, { _parent: this });
							return model.create(fields);
						}, ...value);
					}

					if (model && model.class.prototype instanceof Model) {
						return this.data[key] = new Array(this, (v) => {
							switch (true) {
							case v instanceof Record:
								return v;
							default:
								return Record.create({
									id: v, promise: this.store.select(type, v)
								});
							}
						}, ...value);
					}

					assert('An embedded object must be of type Model or Field');

				}

			},
			set(value=[]) {

				switch (type) {
				case undefined:
					return this.data[key] = new Array(this, Any, ...value);
				case 'string':
					return this.data[key] = new Array(this, String, ...value);
				case 'number':
					return this.data[key] = new Array(this, Number, ...value);
				case 'boolean':
					return this.data[key] = new Array(this, Boolean, ...value);
				case 'datetime':
					return this.data[key] = new Array(this, Datetime, ...value);
				default:

					let model = this.store.lookup(type);

					if (model && model.class.prototype instanceof Field) {
						return this.data[key] = new Array(this, (v) => {
							let fields = Object.assign({}, v, { _parent: this });
							return model.create(fields);
						}, ...value);
					}

					if (model && model.class.prototype instanceof Model) {
						return this.data[key] = new Array(this, (v) => {
							switch (true) {
							case v instanceof Record:
								return v;
							default:
								return String(v);
							}
						}, ...value);
					}

					assert('An embedded object must be of type Model or Field');

				}

			}
		}
	}
}
