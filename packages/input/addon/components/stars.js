import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class extends Component {

	@tracked value = undefined;

	@computed('args.min')
	get min() {
		return this.args.min || 1;
	}

	@computed('args.max')
	get max() {
		return this.args.max || 5;
	}

	@computed('args.disabled')
	get disabled() {
		return this.args.disabled || false;
	}

	@computed('min', 'max', 'value')
	get stars() {
		let b = parseInt(this.min);
		let e = parseInt(this.max);
		return Array(e-b+1).fill().map( (_, n) => {
			return { number: b+n, select: (b+n <= this.value) }
		});
	}

	@action didCreate() {
		this.value = this.args.value;
	}

	@action didChange() {
		this.value = this.args.value;
	}

	@action toggled(value) {

		if (this.disabled) return;

		if (this.value === value) {
			this.value -= 1;
		} else {
			this.value = value;
		}

		if (this.args.onChange) {
			this.args.onChange(value);
		}

	}

}
