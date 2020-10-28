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

	interval = 1000;

	clear() {

		if (enabled() === true) {
			clearInterval(this.poller);
		}

	}

	start(ctx, func, ...args) {

		func.apply(ctx, args);

		if (enabled() === true) {
			this.poller = setInterval(func.bind(ctx, ...args), this.interval);
		}

	}

}
