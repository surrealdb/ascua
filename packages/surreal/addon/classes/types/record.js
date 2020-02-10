import Object from '@ember/object/proxy';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { setProperties } from '@ember/object';

export default class Record extends Object {

	#id = undefined;

	#future = undefined;

	#promise = undefined;

	isRejected = false;

	isFulfilled = false;

	toJSON() {
		return this.#id;
	}

	toString() {
		return this.#id;
	}

	init(params) {
		super.init();
		this.#id = params.id;
		this.#future = params.future;
		this.#promise = params.promise;
		delete this.id;
		delete this.future;
		delete this.promise;
		this.setup();
	}

	unknownProperty(key) {
		this.fetch();
		this.setup();
		return super.unknownProperty(key);
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
		if (this.#future) {
			this.#promise = this.#future();
			this.#future = undefined;
		}
	}

	setup() {
		if (this.#promise) {
			this.#promise.then(
				(value) => {
					if (!this.isDestroyed && !this.isDestroying) {
						setProperties(this, {
							isFulfilled: true,
							content: value,
						});
					}
					return value;
				},
				(reason) => {
					console.debug(reason);
					if (!this.isDestroyed && !this.isDestroying) {
						setProperties(this, {
							isRejected: true,
							reason: reason,
						});
					}
					throw reason;
				},
			);
		}
	}

}
