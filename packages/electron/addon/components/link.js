import Component from '@glimmer/component';
import { action } from '@ember/object';
import Electron from 'electron';

export default class extends Component {

	@action didClick(event) {

		if (!Electron) return;

		if (this.args.download) {
			Electron.remote.getCurrentWebContents().downloadURL(this.args.url);
		} else {
			Electron.remote.shell.openExternal(this.args.url);
		}

		event.stopPropagation();

		event.preventDefault();

		return false;

	}

}
