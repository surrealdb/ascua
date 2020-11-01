import Element from './element';

export default class extends Element {

	type = 'idealBank';

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
