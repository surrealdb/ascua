class Group {

	#data = new Object();

	[Symbol.iterator]() {
		return this.#data;
	}

	put(key, val) {
		return this.#data[key] = val;
	}

	get(key) {
		return this.#data[key];
	}

	del(key) {
		delete this.#data[key];
	}

}

class Cache {

	#data = new Object();

	get(model) {
		return this.#data[model] = this.#data[model] || new Group();
	}

	del(model) {
		for (const k in this.#data[model]) {
			delete this.#data[model][k];
		}
	}

	clear() {
		for (const k in this.#data) {
			this.del(k);
		}
	}

}

export default Cache;
