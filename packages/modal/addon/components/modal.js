import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class extends Component {

	@inject('-document') document;

	@action didClick() {
		if (this.args.onClose) {
			return this.args.onClose();
		}
	}

}
