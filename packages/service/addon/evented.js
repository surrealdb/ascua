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
			const idxs = this.events[e].filter(v => {
				return v.ctx === ctx && v.func === func;
			});
			for (let i = idxs.length -1; i >= 0; i--) {
				this.events[e].splice(idxs[i], 1);
			}
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

}
