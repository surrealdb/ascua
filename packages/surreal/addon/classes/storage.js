import test from '../utils/test';

export default class Storage {

	data = {};

	enabled = test();

	set(id, val) {
		switch (this.enabled) {
		case true:
			return window.localStorage.setItem(id, val);
		case false:
			return this.data[id] = val || undefined;
		}
	}

	get(id) {
		switch (this.enabled) {
		case true:
			return window.localStorage.getItem(id);
		case false:
			return this.data[id] || undefined;
		}
	}

	del(id) {
		switch (this.enabled) {
		case true:
			return window.localStorage.removeItem(id);
		case false:
			return delete this.data[id];
		}
	}

	clear() {
		switch (this.enabled) {
		case true:
			return window.localStorage.clear();
		case false:
			return this.data = {};
		}
	}

}
