export default class Queue {

	#ctx = undefined;

	#fnc = undefined;

	#queue = [];

	#working = false;

	constructor(ctx, fnc) {

		this.#ctx = ctx;

		this.#fnc = fnc;

	}

	async queue() {

		return new Promise( (resolve, reject) => {

			this.#queue.push({
				promise: this.#fnc,
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

		const item = this.#queue.shift();

		if (!item) return false;

		try {
			this.#working = true;
			let v = await item.promise();
			item.resolve(v);
		} catch (e) {
			item.reject(e);
		} finally {
			this.#working = false;
			this.dequeue();
		}

	}

	cancel() {
		this.#queue = [];
	}

}
