import Service from '@ember/service';
import Storage from '../classes/storage';
import isJson from '../utils/is-json';
import isNum from '../utils/is-num';

const Store = new Storage();

export default class extends Service {

	constructor() {

		super(...arguments);

		if (window && window.addEventListener) {
			window.addEventListener('storage', (e) => {
				this.notifyPropertyChange(e.key);
			});
		}

	}

	unknownProperty(key) {

		let val = Store.getItem(key) || undefined;

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

		if (val === null) {
			Store.removeItem(key);
			return this.notifyPropertyChange(key);
		}

		if (val === true) {
			Store.setItem(key, val);
			return this.notifyPropertyChange(key);
		}

		if (val === false) {
			Store.setItem(key, val);
			return this.notifyPropertyChange(key);
		}

		if (typeof val === 'string') {
			Store.setItem(key, val);
			return this.notifyPropertyChange(key);
		}

		if (typeof val === 'number') {
			Store.setItem(key, val);
			return this.notifyPropertyChange(key);
		}

		if (typeof val === 'object') {
			Store.setItem(key, JSON.stringify(val));
			return this.notifyPropertyChange(key);
		}

	}

}
