import Array from './array';

export default class Cache {

	data = {};

	get(model) {
		return this.data[model] = this.data[model] || new Array();
	}

	del(model) {
		this.data[model].forEach( obj => obj.destroy() );
		this.data[model].clear();
	}

	clear() {
		for (const k in this.data) {
			this.del(k);
		}
	}

}
