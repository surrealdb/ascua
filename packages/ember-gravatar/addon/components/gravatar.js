import Component from '@glimmer/component';
import { computed } from '@ember/object';
import avatar from '../utils/avatar';
import md5 from "../utils/md5";

export default class extends Component {

	@computed('args.email')
	get md5() {
		return md5(this.args.email);
	}

	@computed('args.size')
	get size() {
		return this.args.size || 80;
	}

	@computed('args.gender')
	get gender() {
		return this.args.gender || 'm';
	}

	@computed('gender')
	get err() {
		return `data:image/svg+xml;base64,${avatar[this.gender]}`;
	}

	@computed('md5', 'size')
	get src() {
		return `https://secure.gravatar.com/avatar/${this.md5}?s=${this.size}&d=404`;
	}

	@computed('err', 'src')
	get image() {
		return `url('${this.src}'), url('${this.err}')`;
	}

}
