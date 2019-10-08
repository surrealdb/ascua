import Component from './base';
import { computed } from '@ember/object';

export default class extends Component {

	@computed('args.url', 'args.via', 'args.tags', 'args.text')
	get href() {
		let url = this.args.url || '';
		let via = this.args.via || '';
		let tags = this.args.tags || '';
		let text = this.args.text || '';
		return `https://twitter.com/share?url=${url}&via=${via}&text=${text}&hashtags=${tags}`;
	}

}

