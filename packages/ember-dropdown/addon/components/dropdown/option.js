import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class extends Component {

	@action clicked() {
		this.args.dropdown.changed(this);
	}

	@action didInsert(element) {
		this.element = element;
		this.args.dropdown.register(this);
	}

	@action willDestroy(element) {
		this.element = element;
		this.args.dropdown.unregister(this);
	}

	@computed('args.value', 'args.dropdown.args.{value,multiple}')
	get selected() {
		if (this.args.dropdown.args.multiple) {
			return [].concat(this.args.dropdown.value).includes(this.args.value);
		} else {
			return this.args.value === this.args.dropdown.value;
		}
	}

}
