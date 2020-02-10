import Element from './element';
import { computed } from '@ember/object';

export default class extends Element {

	type = 'idealBank';

	@computed('args.{classes,style,value,hideIcon,disabled}')
	get opts() {
		return {
			classes: this.args.classes,
			style: this.args.style,
			value: this.args.value,
			hideIcon: this.args.hideIcon || false,
			disabled: this.args.disabled || false,
		}
	}

}
