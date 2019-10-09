import Component from './base';
import { computed } from '@ember/object';

export default class extends Component {

	@computed('args.url')
	get href() {
		let url = this.args.url || '';
		return `https://facebook.com/sharer/sharer.php?u=${url}`;
	}

}
