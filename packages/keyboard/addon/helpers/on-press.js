import Helper from '@ember/component/helper';
import { inject } from '@ember/service';
import parse from '../utils/parse';
import keys from '../utils/keys';

export default class extends Helper {

	@inject('-document') document;

	compute([keys, func]) {

		if (typeof FastBoot !== 'undefined') return;

		this.func = func;

		this.opts = parse(keys);

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

		if (this.opts.alt && !event.altKey) {
			return true;
		}

		if (this.opts.ctrl && !event.ctrlKey) {
			return true;
		}

		if (this.opts.meta && !event.metaKey) {
			return true;
		}

		if (this.opts.shift && !event.shiftKey) {
			return true;
		}

		if (keys[this.opts.char] !== event.which) {
			return true;
		}

		event.stopPropagation();

		event.preventDefault();

		return this.func(event);

	}

}
