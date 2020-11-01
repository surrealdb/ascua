import Component from '@glimmer/component';

export default class extends Component {

	get href() {
		let url = this.args.url || '';
		return `fb-messenger://share?link=${url}`;
	}

}
