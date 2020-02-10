import Element from './element';
import { computed } from '@ember/object';

export default class extends Element {

	type = 'iban';

	@computed('args.{classes,style,supportedCountries,placeholderCountry,iconStyle,hideIcon,disabled}')
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
