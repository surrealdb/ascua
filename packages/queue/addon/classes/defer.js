export default class Defer {

	#ctx = undefined;

	#fnc = undefined;

	#queue = [];

	#working = false;

	#promise = undefined;

	constructor(ctx, fnc) {

		this.#ctx = ctx;

		this.#fnc = fnc;

	}

	async queue() {

		return new Promise( (resolve, reject) => {

			this.#promise = this.#fnc.bind(this.#ctx, ...arguments);

			this.#queue.push({
				resolve,
				reject,
			});

			this.dequeue();

		});

	}

	async dequeue() {

		if (this.#working) {
			return false;
		}

		const item = this.#promise;
		const resp = this.#queue;
		this.#promise = null;
		this.#queue = [];

		if (!item) return false;

		try {
			this.#working = true;
			let v = await item();
			for (let r of resp) {
				r.resolve(v);
			}
		} catch (e) {
			for (let r of resp) {
				r.reject(e);
			}
		} finally {
			this.#working = false;
			this.dequeue();
		}

	}

	cancel() {
		this.#promise = null;
		this.#queue = [];
	}

}
