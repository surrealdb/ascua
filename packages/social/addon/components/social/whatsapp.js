import Component from '@glimmer/component';
import { computed } from '@ember/object';

export default class extends Component {

	@computed('args.{url,text}')
	get href() {
		let url = this.args.url || '';
		let text = this.args.text || '';
		return `whatsapp://send?text=${url} ${text}`;
	}

}

