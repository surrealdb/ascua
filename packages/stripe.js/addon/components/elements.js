import Component from '@glimmer/component';
import stripe from '@ascua/stripe.js';

export default class extends Component {

	elements = stripe.elements();

}
