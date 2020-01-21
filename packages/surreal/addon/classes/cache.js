import Array from './array';

export default class Cache {

	data = {};

	get(model) {
		return this.data[model] = this.data[model] || new Array();
	}

}
