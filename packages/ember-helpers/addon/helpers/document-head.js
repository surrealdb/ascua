import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {

	@inject('-document') document;

	compute() {
		return this.document.head;
	}

}
