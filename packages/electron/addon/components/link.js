import Component from '@glimmer/component';
import { action } from '@ember/object';
import Remote from '@electron/remote';
import Electron from 'electron';

export default class extends Component {

	@action didClick(event) {

		if (!Electron) return;

		if (this.args.download) {
			Remote.getCurrentWebContents().downloadURL(this.args.url);
		} else {
			Remote.shell.openExternal(this.args.url);
		}

		event.stopPropagation();

		event.preventDefault();

		return false;

	}

}
