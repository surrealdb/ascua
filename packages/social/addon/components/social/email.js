import Component from '@glimmer/component';

export default class extends Component {

	get href() {
		let to = this.args.to || '';
		let subject = this.args.subject || '';
		let message = this.args.message || '';
		return `mailto:${to}?subject=${subject}&body=${message}`;
	}

}
