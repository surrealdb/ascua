import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import { dispatch } from '@ascua/events';
import Event from '@ascua/events';

export default class extends Component {

	@inject('-document') document;

	@action didClick(event) {
		if (this.args.onClose) {
			return this.args.onClose();
		}
		if (event instanceof Event === false) {
			dispatch(event, "close");
		}
	}

}
