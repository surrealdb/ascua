import Element from './element';

export default class extends Element {

	type = 'card';

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
