import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {

	@inject('-document') document;

	compute(val) {
		return this.document.getElementsByTagName(val)[0];
	}

}
