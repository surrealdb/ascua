import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class extends Component {

	@action didInsert(element) {
		this.element = element;
	}

	@action didInput(event) {
		if (this.args.onChange) {
			this.args.onChange(this.element.value);
		}
	}

	@action didLimit(event) {
		if (event.which !== 13) return true;
		if (this.args.limit == false) return true;
		return (this.element.value.split('\n').length < this.args.limit);
	}

	@action didPress(event) {
		setTimeout( () => {
			this.element.style.height = 'auto';
			this.element.style.overflow = 'hidden';
			this.element.style.height = `${this.element.scrollHeight}px`;
		})
	}

}
