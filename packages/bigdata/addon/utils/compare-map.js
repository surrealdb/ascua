export default class CompareMap {

	constructor() {
		this.map = {};
	}

	clear() {
		this.map = {};
	}

	delete(o) {
		let k = JSON.stringify(o);
		delete this.map[k];
	}

	get(o) {
		let k = JSON.stringify(o);
		return this.map[k];
	}

	has(o) {
		let k = JSON.stringify(o);
		return this.map[k] !== undefined;
	}

	set(o, v) {
		let k = JSON.stringify(o);
		this.map[k] = v;
		return v;
	}

}
