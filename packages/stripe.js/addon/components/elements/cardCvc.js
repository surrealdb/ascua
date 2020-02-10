import Element from './element';
import { computed } from '@ember/object';

export default class extends Element {

	type = 'cardCvc';

	@computed('args.{classes,style,placeholder,disabled}')
	get opts() {
		return {
			classes: this.args.classes,
			style: this.args.style,
			placeholder: this.args.placeholder,
			disabled: this.args.disabled || false,
		}
	}

}
