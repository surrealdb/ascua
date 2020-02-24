import Ember from 'ember';
import { get, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
const { combine } = Ember.__loader.require('@glimmer/reference');
const { UNKNOWN_PROPERTY_TAG, getChainTagsForKey } = Ember.__loader.require('@ember/-internals/metal');

export default class Remote {

	static create(data) {
		return new Proxy(new Remote(data), {
			get(target, key) {
				switch (true) {
				case key in target && typeof target[key] === 'function':
					return target[key].bind(target);
				case typeof key === 'symbol':
					return target[key];
				case key in target:
					return target[key];
				case target.content && typeof target.content[key] === 'function':
					return target.content[key].bind(target.content);
				default:
					target.fetch();
					target.setup();
					return get(target, `content.${key}`);
				}
			},
			set(target, key, val) {
				switch (true) {
				case key in target:
					target[key] = val;
					return true;
				default:
					target.fetch();
					target.setup();
					set(target, `content.${key}`, val);
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
