import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class extends Component {

	@computed('args.width')
	get width() {
		return this.args.width || 600;
	}

	@computed('args.height')
	get height() {
		return this.args.height || 400;
	}

	@action didClick(event) {

		event.preventDefault();

		event.stopPropagation();

		var l = (screen.width / 2) - (this.width / 2);
		var t = (screen.height / 2) - (this.height / 2);

		if (typeof Electron !== 'undefined') {
			Electron.remote.shell.openExternal(this.href);
		} else {
			window.open(this.href, null, `status=no, titlebar=no, toolbar=no, width=${this.width}, height=${this.height}, top=${t}, left=${l}`);
		}

		return false;

	}

}
