import Service from '@ember/service';

export default class Evented extends Service {

	events = {};

	on(e, ctx, func) {
		if (func === undefined) {
			func = ctx;
		}
		if (typeof this.events[e] !== 'object') {
			this.events[e] = [];
		}
		if (func instanceof Function) {
			this.events[e].push({ ctx, func });
		}
	}

	off(e, ctx, func) {
		if (typeof this.events[e] === 'object') {
			this.events[e] = this.events[e].filter(v => {
				return v.ctx !== ctx && v.func !== func;
			});
		}
	}

	once(e, ctx, func) {
		this.on(e, function f(...args) {
			this.off(e, ctx, f);
			func.apply(ctx, args);
		});
	}

	emit(e, ...args) {
		if (typeof this.events[e] === 'object') {
			this.events[e].forEach(val => {
				val.func.apply(val.ctx, args);
			});
		}
	}

	removeAllListeners(e) {
		if (e) {
			if (typeof this.events[e] === 'object') {
				this.events[e] = [];
			}
		} else {
			for (const e in this.events) {
				this.events[e] = [];
			}
		}
	}

}
