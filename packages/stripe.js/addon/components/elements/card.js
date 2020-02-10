import Element from './element';
import { computed } from '@ember/object';

export default class extends Element {

	type = 'card';

	@computed('args.{classes,style,value,hidePostalCode,iconStyle,hideIcon,disabled}')
	get opts() {
		return {
			classes: this.args.classes,
			style: this.args.style,
			value: this.args.value,
			hidePostalCode: this.args.hidePostalCode || false,
			iconStyle: this.args.iconStyle || 'default',
			hideIcon: this.args.hideIcon || false,
			disabled: this.args.disabled || false,
		}
	}

}
