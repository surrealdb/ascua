import Object from '@ember/object';
import { assert } from '@ember/debug';

export default class extends Object {

	name = 'base';

	toString() {
		return `metric:${this.name}`;
	}

	clear() {}

	identify(/*id, data*/) {}

	trackPage(/*data*/) {}

	trackEvent(/*name, data*/) {}

}
