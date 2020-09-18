const timeError = new Error("context expired");
const cancError = new Error("context cancelled");

const noop = () => {};

export default class Context {

	static background() {
		return new Context(new Promise(() => {}));
	}

	static withCancel(parent) {
		if (parent) {
			return parent.withCancel();
		} else {
			return this.background().withCancel();
		}
	}

	static withTimeout(parent, timeout = 0) {
		if (parent) {
			return parent.withTimeout(timeout);
		} else {
			return this.background().withTimeout(timeout);
		}
	}

	cancelled = undefined;

	constructor(cancelled) {
		this.cancelled = cancelled;
		Object.freeze(this);
		return this;
	}

	withCancel() {
		let cancel, cancelled = new Promise(r => cancel = r);
		let context = new Context(cancelled);
		this.cancelled.then(error => cancel(cancError));
		return [ context, cancel ];
	}

	withTimeout(ms) {
		let [ context, cancel ] = this.withCancel();
		this.delay(ms).then(error => cancel(timeError));
		return [ context, cancel ];
	}

	delay(ms) {
		return new Promise( (resolve, reject) => {
			let timer = setTimeout(resolve, ms);
			this.cancelled.then(error => {
				clearTimeout(timer);
				reject(error);
			}, noop);
		});
	}

}
