import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default class extends Helper {

	@inject('-document') document;

	compute([elem, name, func], opts) {

		this.elem = elem;
		this.name = name;
		this.func = func;
		this.opts = opts;

		if (typeof this.elem === "string") {
			this.func = this.name;
			this.name = this.elem;
			this.elem = this.document;
		}

		this.elem.removeEventListener(this.name, this.func, this.opts);

		this.elem.addEventListener(this.name, this.func, this.opts);

	}

	willDelete() {

		this.elem.removeEventListener(this.name, this.func, this.opts);

		super.willDelete();

	}

}
