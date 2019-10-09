import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class extends Component {

	@computed('args.url')
	get href() {
		let url = this.args.url || '';
		return `fb-messenger://share?link=${url}`;
	}

}
