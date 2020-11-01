import Component from '@glimmer/component';
import avatar from '../utils/avatar';
import md5 from "../utils/md5";

export default class extends Component {

	get md5() {
		return md5(this.args.email);
	}

	get size() {
		return this.args.size || 80;
	}

	get gender() {
		return this.args.gender || 'm';
	}

	get err() {
		return `data:image/svg+xml;base64,${avatar[this.gender]}`;
	}

	get src() {
		return `https://secure.gravatar.com/avatar/${this.md5}?s=${this.size}&d=404`;
	}

	get image() {
		return `url('${this.src}'), url('${this.err}')`;
	}

}
