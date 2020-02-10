import Component from '@glimmer/component';
import stripe from '@ascua/stripe.js';

export default class extends Component {

	constructor() {
		super(...arguments);
		this.elements = stripe.elements();
	}

}
