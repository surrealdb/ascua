import Element from './element';

export default class extends Element {

	type = 'paymentRequestButton';

	get opts() {
		return {
			classes: this.args.classes,
			style: this.args.style,
			paymentRequest: this.args.paymentRequest,
		}
	}

}
