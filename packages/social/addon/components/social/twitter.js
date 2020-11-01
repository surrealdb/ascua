import Component from './base';

export default class extends Component {

	get href() {
		let url = this.args.url || '';
		let via = this.args.via || '';
		let tags = this.args.tags || '';
		let text = this.args.text || '';
		return `https://twitter.com/share?url=${url}&via=${via}&text=${text}&hashtags=${tags}`;
	}

}

