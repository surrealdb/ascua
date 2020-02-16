import { tracked } from '@glimmer/tracking';

export default class Remote {

	static create(data) {
		return new Proxy(new Remote(data), {
			get(target, key) {
				if (key in target) {
					let value = Reflect.get(...arguments);
					return typeof value === 'function' ? value.bind(target) : value;
				} else {
					target.fetch();
					target.setup();
					return target.content[key];
				}
			},
			set(target, key, val) {
				if (key in target) {
					let value = Reflect.set(...arguments);
					return typeof value === 'function' ? value.bind(target) : value;
				} else {
					target.fetch();
					target.setup();
					return target.content[key] = val;
				}
			}
		});
	}

	#id = undefined;

	#done = false;

	#future = undefined;

	#promise = undefined;

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

	then() {
		this.fetch();
		this.setup();
		return this.#promise['then'](...arguments);
	}

	catch() {
		this.fetch();
		this.setup();
		return this.#promise['catch'](...arguments);
	}

	finally() {
		this.fetch();
		this.setup();
		return this.#promise['finally'](...arguments);
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
					this.failure = failure
					this.#done = true;
					throw failure;
				},
			);
		}
	}

}
