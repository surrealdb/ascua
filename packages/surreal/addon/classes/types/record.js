import Object from '@ember/object/proxy';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { setProperties } from '@ember/object';

export default class Record extends Object {

	isRejected = false;

	isFulfilled = false;

	toJSON() {
		return this.id;
	}

	toString() {
		return this.id;
	}

	init() {

		super.init(...arguments);

		this.promise.then(
			(value) => {
				if (!this.isDestroyed && !this.isDestroying) {
					setProperties(this, {
						isFulfilled: true,
						content: value,
					});
				}
				return value;
			},
			(reason) => {
				if (!this.isDestroyed && !this.isDestroying) {
					setProperties(this, {
						isRejected: true,
						reason: reason,
					});
				}
				throw reason;
			},
		);

	}

	then() {
		return this.promise['then'](...arguments);
	}

	catch() {
		return this.promise['catch'](...arguments);
	}

	finally() {
		return this.promise['finally'](...arguments);
	}

}
