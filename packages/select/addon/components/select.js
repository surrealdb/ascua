import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class extends Component {

	@action didCreate(element) {
		this.element = element;
	}

	@action changed() {

		let options = Array.from(this.element.options);

		let value = options.filter(o => o.selected).map(o => o.value);

		if (this.args.onSelect) {
			this.args.onSelect( this.element.multiple ? value : value[0] );
		}

	}

}
