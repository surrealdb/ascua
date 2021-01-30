function enabled() {
	try {
		if (typeof FastBoot !== 'undefined') throw "exception";
		if (!window) throw "exception";
		if (!window.clearInterval) throw "exception";
		if (!window.setInterval) throw "exception";
		return true;
	} catch (e) {
		return false;
	}
}

export default class extends Object {

	timer = null;

	interval = 1000;

	constructor(interval) {

		this.interval = interval;

	}

	clear() {

		if (enabled() === true) {
			clearInterval(this.timer);
		}

	}

	start(ctx, func, ...args) {

		func.apply(ctx, args);

		if (enabled() === true) {
			this.timer = setInterval(func.bind(ctx, ...args), this.interval);
		}

	}

}
