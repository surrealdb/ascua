import Component from '@glimmer/component';

export default class extends Component {

	get href() {
		let url = this.args.url || '';
		let text = this.args.text || '';
		return `whatsapp://send?text=${url} ${text}`;
	}

}

