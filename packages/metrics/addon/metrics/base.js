import Object from '@ember/object';
import { assert } from '@ember/debug';

export default class extends Object {

	name = 'base';

	toString() {
		return `metric:${this.name}`;
	}

	load() {
		assert(`${this.toString()} must implement the load hook!`);
	}

	willDestroy() {
		assert(`${this.toString()} must implement the willDestroy hook!`);
	}

	clear() {}

	identify(/*id, data*/) {}

	trackPage(/*data*/) {}

	trackEvent(/*name, data*/) {}

}
