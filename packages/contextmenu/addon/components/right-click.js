import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class extends Component {

	@inject contextmenu;

	@action didClick(event) {
		if (event.ctrlKey === true) {
			event.stopPropagation();
			return this.contextmenu.show(
				event, this.args.menu, this.args.model,
			);
		}
	}

	@action didCmenu(event) {
		event.stopPropagation();
		return this.contextmenu.show(
			event, this.args.menu, this.args.model,
		);
	}

}
