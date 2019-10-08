function enabled() {
	try {
		if (!window) throw "exception";
		if (!window.localStorage) throw "exception";
		window.localStorage.setItem('test', 'OK');
		window.localStorage.removeItem('test');
		return true;
	} catch (e) {
		return false;
	}
}

export default class extends Object {

	constructor() {
		super();
		this.ok = enabled();
		this.data = new Object();
	}

	setItem(id, val) {
		switch (this.ok) {
		case true:
			return window.localStorage.setItem(id, val);
		case false:
			return this.data[id] = val || undefined;
		}
	}

	getItem(id) {
		switch (this.ok) {
		case true:
			return window.localStorage.getItem(id);
		case false:
			return this.data[id] || undefined;
		}
	}

	removeItem(id) {
		switch (this.ok) {
		case true:
			return window.localStorage.removeItem(id);
		case false:
			return delete this.data[id];
		}
	}

	clear() {
		switch (this.ok) {
		case true:
			return window.localStorage.clear();
		case false:
			return this.data = new Object();
		}
	}

}
