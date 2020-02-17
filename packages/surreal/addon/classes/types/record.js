import Ember from 'ember';
import Core from '@ember/object/proxy';
import { get, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
const { combine } = Ember.__loader.require('@glimmer/reference');
const { UNKNOWN_PROPERTY_TAG, getChainTagsForKey } = Ember.__loader.require('@ember/-internals/metal');

export default class Remote {

	static create(data) {
		return new Proxy(new Remote(data), {
			get(target, key) {
				if (key in target) {
					let value = Reflect.get(target, key);
					return typeof value === 'function' ? value.bind(target) : value;
				} else {
					target.fetch();
					target.setup();
					let proxy = target.content;
					let value = Reflect.get(proxy, key);
					return typeof value === 'function' ? value.bind(proxy) : value;
				}
			},
			set(target, key, val) {
				if (key in target) {
					let value = Reflect.set(target, key, val);
					typeof value === 'function' ? value.bind(target) : value;
					return true;
				} else {
					target.fetch();
					target.setup();
					let proxy = target.content;
					let value = Reflect.set(proxy, key, val);
					typeof value === 'function' ? value.bind(proxy) : value;
					return true;
				}
			}
		});
	}

	#id = undefined;

	#done = false;

	#future = undefined;

	#promise = undefined;

	#failure = undefined;

	@tracked content = {};

	toJSON() {
		return this.#id;
	}

	toString() {
		return this.#id;
	}

	constructor(params) {
		this.#id = params.id;
		this.#future = params.future;
		this.#promise = params.promise;
		this.setup();
	}

	[UNKNOWN_PROPERTY_TAG](key) {
		return combine(
			getChainTagsForKey(this, `content.${key}`)
		);
	}

	then() {
		this.fetch();
		this.setup();
		return this.#promise.then(...arguments);
	}

	catch() {
		this.fetch();
		this.setup();
		return this.#promise.catch(...arguments);
	}

	finally() {
		this.fetch();
		this.setup();
		return this.#promise.finally(...arguments);
	}

	fetch() {
		if (this.#future && !this.#done) {
			this.#promise = this.#future();
			this.#future = undefined;
		}
	}

	setup() {
		if (this.#promise && !this.#done) {
			this.#promise.then(
				(content) => {
					this.content = content;
					this.#done = true;
					return content;
				},
				(failure) => {
					this.#failure = failure
					this.#done = true;
					throw failure;
				},
			);
		}
	}

}
