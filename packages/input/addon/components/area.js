import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject } from '@ember/service';
import { action } from '@ember/object';

export default class extends Component {

	@inject('-document') document;

	@tracked value = this.args.value;

	@action didCreate(element) {
		this.element = element;
		element.style.height = 'auto';
		element.style.overflow = 'hidden';
		element.style.height = `${element.scrollHeight}px`;
	}

	@action didChange(element) {
		this.value = this.args.value;
		element.value = this.args.value;
		element.style.height = 'auto';
		element.style.overflow = 'hidden';
		element.style.height = `${element.scrollHeight}px`;
	}

	@action didInput() {
		this.element.value = this.element.value;
		this.element.style.height = 'auto';
		this.element.style.overflow = 'hidden';
		this.element.style.height = `${this.element.scrollHeight}px`;
		if (this.args.onChange) {
			this.args.onChange(this.element.value);
		}
	}

	@action didLimit(event) {
		if (event.which !== 13) return true;
		if (this.args.limit == false) return true;
		return (this.element.value.split('\n').length < this.args.limit);
	}

}
