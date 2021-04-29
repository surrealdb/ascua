import Service from '@ember/service';
import Storage from '../classes/storage';
import isJson from '../utils/is-json';
import isNum from '../utils/is-num';

export default class extends Service {

	#ls = new Storage();

	constructor() {

		super(...arguments);

		if (window && window.addEventListener) {
			window.addEventListener('storage', (e) => {
				this.notifyPropertyChange(e.key);
			});
		}

	}

	unknownProperty(key) {

		let val = this.#ls.get(key) || undefined;

		if ( val === 'null' ) {
			return null
		}

		if ( val === 'true' ) {
			return Boolean(true);
		}

		if ( val === 'false' ) {
			return Boolean(false);
		}

		if ( isNum(val) ) {
			return Number(val);
		}

		if ( isJson(val) ) {
			return JSON.parse(val) || {};
		}

		return val;

	}

	setUnknownProperty(key, val) {

		if (val === undefined) {
			this.#ls.del(key);
			return this.notifyPropertyChange(key);
		}

		if (val === null) {
			this.#ls.set(key, val);
			return this.notifyPropertyChange(key);
		}

		if (val === true) {
			this.#ls.set(key, val);
			return this.notifyPropertyChange(key);
		}

		if (val === false) {
			this.#ls.set(key, val);
			return this.notifyPropertyChange(key);
		}

		if (typeof val === 'string') {
			this.#ls.set(key, val);
			return this.notifyPropertyChange(key);
		}

		if (typeof val === 'number') {
			this.#ls.set(key, val);
			return this.notifyPropertyChange(key);
		}

		if (typeof val === 'object') {
			this.#ls.set(key, JSON.stringify(val));
			return this.notifyPropertyChange(key);
		}

	}

}
