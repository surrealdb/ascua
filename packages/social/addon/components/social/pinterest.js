import Component from './base';

export default class extends Component {

	get href() {
		let url = this.args.url || '';
		let media = this.args.media || '';
		let description = this.args.description || '';
		return `https://pinterest.com/pin/create/bookmarklet/?url=${url}&media=${media}&description=${description}`;
	}

}
