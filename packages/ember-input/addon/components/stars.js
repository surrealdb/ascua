import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class extends Component {

	@tracked value = this.args.value;

	@computed('args.min')
	get min() {
		return this.args.min || 1;
	}

	@computed('args.max')
	get max() {
		return this.args.max || 5;
	}

	@computed('args.color')
	get color() {
		return this.args.color || '#444';
	}

	@computed('args.disabled')
	get disabled() {
		return this.args.disabled || false;
	}

	@computed('min', 'max')
	get stars() {
		let b = this.min;
		let e = this.max;
		return Array.apply(null, Array(e-b+1)).map( (_, n) => {
			return n + b;
		});
	}

	@action toggle(value) {

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
