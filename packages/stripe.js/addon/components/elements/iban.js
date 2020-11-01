import Element from './element';

export default class extends Element {

	type = 'iban';

	get opts() {
		return {
			classes: this.args.classes,
			style: this.args.style,
			supportedCountries: this.args.supportedCountries || [],
			placeholderCountry: this.args.placeholderCountry,
			iconStyle: this.args.iconStyle || 'default',
			hideIcon: this.args.hideIcon || false,
			disabled: this.args.disabled || false,
		}
	}

}
