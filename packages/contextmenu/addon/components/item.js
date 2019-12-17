import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class extends Component {

	@inject contextmenu;

	@computed('args.type')
	get type() {
		return this.args.type || 'normal';
	}

	@computed('args.enabled')
	get enabled() {
		return this.args.enabled || true;
	}

	@computed('args.visible')
	get visible() {
		return this.args.visible || true;
	}

	@computed('args.checked')
	get checked() {
		return this.args.checked || false;
	}

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
