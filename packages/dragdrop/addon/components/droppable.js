import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {

	@tracked dropping = false;

	@action didDragOver(event) {
		event.preventDefault();
		event.stopPropagation();
	}

	@action didDragEnter(event) {
		this.dropping = true;
		event.preventDefault();
		event.stopPropagation();
	}

	@action didDragLeave(event) {
		this.dropping = false;
		event.preventDefault();
		event.stopPropagation();
	}

	@action didDrop(event) {
		this.dropping = false;
		event.preventDefault();
		event.stopPropagation();
		if (this.args.onDrop) {
			this.args.onDrop(event);
		}
	}

}
