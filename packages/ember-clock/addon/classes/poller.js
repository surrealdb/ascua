export default class extends Object {

	interval = 1000;

	clear() {
		clearInterval(this.poller);
	}

	start(ctx, func, ...args) {
		func.apply(ctx, args);
		this.poller = setInterval(func.bind(ctx, ...args), this.interval);
	}

}
