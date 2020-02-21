import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';

export default class extends Component {

	@inject contextmenu;

	@arg type = 'normal';

	@arg enabled = true;

	@arg visible = true;

	@arg checked = false;

	@action didClick() {
		if (this.args.click) {
			this.args.click();
		}
	}

	@action didMouse() {
		setTimeout( () => {
			this.contextmenu.hide();
		});
	}

	@action didCreate() {
		this.contextmenu.items.addObject(this);
	}

	@action willDelete() {
		this.contextmenu.items.removeObject(this);
	}

}
