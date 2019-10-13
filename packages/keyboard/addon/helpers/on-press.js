import Helper from '@ember/component/helper';
import { inject } from '@ember/service';
import keys from '../utils/keys';

export default class extends Helper {

	@inject('-document') document;

	compute([char, func], opts) {

		this.char = char;
		this.func = func;
		this.opts = opts;

		if (typeof FastBoot !== 'undefined') return;

		this.call = this.handle.bind(this);

		this.document.removeEventListener('keydown', this.call);

		this.document.addEventListener('keydown', this.call);

	}

	willDestroy() {

		if (typeof FastBoot !== 'undefined') return;

		this.document.removeEventListener('keydown', this.call);

		super.willDestroy();

	}

	handle(event) {

		if (event.altKey && !this.opts.alt) {
			return true;
		}

		if (event.ctrlKey && !this.opts.ctrl) {
			return true;
		}

		if (event.metaKey && !this.opts.meta) {
			return true;
		}

		if (event.shiftKey && !this.opts.shift) {
			return true;
		}

		if (keys[this.char] !== event.which) {
			return true;
		}

		event.stopPropagation();

		event.preventDefault();

		return this.func(event);

	}

}
