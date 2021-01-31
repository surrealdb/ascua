import stripe from '@ascua/stripe.js';

export default {

	name: 'stripe',

	initialize(instance) {

		// Load the Stripe.js library
		stripe.load();

	},

}
