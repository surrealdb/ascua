import Helper from '@ember/component/helper';

export default class extends Helper {

	elem = undefined;
	name = undefined;
	func = undefined;
	opts = undefined;

	compute([elem, name, func], opts) {

		this.elem = elem;
		this.name = name;
		this.func = func;
		this.opts = opts;

		this.elem.removeEventListener(this.name, this.func, this.opts);

		this.elem.addEventListener(this.name, this.func, this.opts);

	}

	willDestroy() {

		this.elem.removeEventListener(this.name, this.func, this.opts);

		super.willDestroy();

	}

}
