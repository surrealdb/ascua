import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class extends Component {

	@inject('-document') document;

	@tracked value = this.args.value;

	@action didCreate(element) {
		this.element = element;
	}

	@action didChange(element) {
		this.value = this.args.value;
		element.value = this.args.value;
	}

	@action didInput() {
		if (this.args.onChange) {
			this.args.onChange(this.element.value);
		}
	}

}
