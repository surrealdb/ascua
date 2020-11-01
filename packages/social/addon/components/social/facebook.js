import Component from './base';

export default class extends Component {

	get href() {
		let url = this.args.url || '';
		return `https://facebook.com/sharer/sharer.php?u=${url}`;
	}

}
