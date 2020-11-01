import Component from './base';

export default class extends Component {

	get href() {
		let url = this.args.url || '';
		return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
	}

}
