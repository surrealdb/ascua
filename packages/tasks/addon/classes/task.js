import { action } from '@ember/object';
import { setProperties } from '@ember/object';

const CANCELLED = new Error("Cancelled task instance");

export default class Task {

	#typ = 'task';

	#ctx = undefined;

	#fnc = undefined;

	task = null;

	tasks = [];

	isIdle = true;

	isRunning = false;

	isFailure = false;

	isSuccess = false;

	value = undefined;

	error = undefined;

	constructor(ctx, fnc, typ = 'task') {

		this.#ctx = ctx;

		this.#fnc = fnc;

		this.#typ = typ;

	}

	@action async run() {

		switch (this.#typ) {
		case 'task':
			break;
		case 'drop':
			if (this.isRunning) {
				return;
			}
			break;
		case 'restart':
			if (this.isRunning && this.task) {
				try {
					this.task.throw(CANCELLED);
				} catch (e) {
					// Ignore
				}
			}
			break;
		}

		let task = this.task = this.#fnc.call(this.#ctx);

		this.tasks.pushObject(task);

		const loop = async (fnc) => {
			try {
				let item = fnc.next();
				await item.value;
				if (!item.done) {
					return await loop(fnc);
				}
				return item;
			} catch (e) {
				fnc.throw(e);
				throw e;
			}
		}

		try {

			if (this.task === task) {
				if (!this.isDestroyed) {
					if (!this.isDestroying) {
						setProperties(this, {
							isIdle: false,
							isRunning: true,
							isSuccess: false,
							isFailure: false,
						});
					}
				}
			}

			let i = await loop(task);

			if (this.task === task) {
				if (!this.isDestroyed) {
					if (!this.isDestroying) {
						setProperties(this, {
							value: i.value,
							isIdle: true,
							isRunning: false,
							isSuccess: true,
							isFailure: false,
						});
					}
				}
			}

		} catch (e) {

			if (this.task === task) {
				if (!this.isDestroyed) {
					if (!this.isDestroying) {
						setProperties(this, {
							error: e,
							isIdle: true,
							isRunning: false,
							isSuccess: false,
							isFailure: true,
						});
					}
				}
			}

		} finally {

			this.tasks.removeObject(task);

		}

	}

	@action async cancel() {
		try {
			this.task.throw(CANCELLED);
		} catch (e) {
			// Ignore
		}
	}

	@action async cancelAll() {
		for (const task of this.tasks) {
			try {
				task.throw(CANCELLED);
			} catch (e) {
				// Ignore
			}
		}
	}

}
