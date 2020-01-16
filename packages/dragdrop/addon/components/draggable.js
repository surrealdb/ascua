import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {

	@tracked dragging = false;

	@action didDragEnd(event) {
		this.dragging = false;
		event.stopPropagation();
	}

	@action didDragStart(event) {
		this.dragging = true;
		event.stopPropagation();
		if (this.args.onDrag) {
			this.args.onDrag(event);
		}
	}

}
