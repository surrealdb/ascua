import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class extends Component {

	@computed('args.to', 'args.subject', 'args.message')
	get href() {
		let to = this.args.to || '';
		let subject = this.args.subject || '';
		let message = this.args.message || '';
		return `mailto:${to}?subject=${subject}&body=${message}`;
	}

}
