import Property from './property';
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
import { setProperties } from '@ember/object';

export default function(type) {
	return Property({
		get(key) {

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
						return model.create({ ...v, parent: this });
					}, ...value);
				}

				if (model && model.class.prototype instanceof Model) {
					return this.data[key] = this.data[key] || new Array(this, (v) => {
						switch (true) {
						case v === null:
							return v;
						case v === undefined:
							return v;
						case v instanceof Record:
							return v;
						case v instanceof Model:
							// console.debug('---', 'record -> model', this.id, v);
							return Record.create({
								id: v.id, promise: Promise.resolve(v)
							});
						case v instanceof Object:
							// console.debug('---', 'record -> object', this.id, v);
							return Record.create({
								id: v.id, promise: this.store.inject(v)
							});
						default:
							// console.debug('---', 'record -> default', this.id, v);
							return Record.create({
								id: v, future: () => this.store.select(type, v)
							});
						}
					}, ...value);
				}

				assert('An embedded object must be of type Model or Field');

			}

		},
		set(key, value=[]) {

			if (this.data[key] !== undefined) {
				value.forEach( async (v, k) => {
					switch (true) {
					case this.data[key][k] !== undefined:
						await this.data[key][k];
						setProperties(this.data[key][k], v);
						break;
					case this.data[key][k] === undefined:
						this.data[key].pushObject(v);
						break;
					}
				});
				return this.data[key];
			}

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
						return model.create({ ...v, parent: this });
					}, ...value);
				}

				if (model && model.class.prototype instanceof Model) {
					return this.data[key] = new Array(this, (v) => {
						switch (true) {
						case v === null:
							return v;
						case v === undefined:
							return v;
						case v instanceof Record:
							return v;
						case v instanceof Model:
							return Record.create({
								id: v.id, promise: Promise.resolve(v)
							});
						case v instanceof Object:
							return Record.create({
								id: v.id, promise: this.store.inject(v)
							});
						default:
							return Record.create({
								id: v, future: () => this.store.select(type, v)
							});
						}
					}, ...value);
				}

				assert('An embedded object must be of type Model or Field');

			}

		},
	});
}
