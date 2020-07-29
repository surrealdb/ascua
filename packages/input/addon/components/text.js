import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { action } from '@ember/object';
import { arg } from '@ascua/decorators';

export default class extends Component {

	@inject('-document') document;

	@arg value = '';

	@action didCreate(element) {
		this.element = element;
	}

	@action didInput() {
		if (this.args.onChange) {
			this.args.onChange(this.element.value);
		}
	}

}
