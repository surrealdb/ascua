import Element from './element';
import { computed } from '@ember/object';

export default class extends Element {

	type = 'paymentRequestButton';

	@computed('args.{classes,style,paymentRequest}')
	get opts() {
		return {
			classes: this.args.classes,
			style: this.args.style,
			paymentRequest: this.args.paymentRequest,
		}
	}

}
