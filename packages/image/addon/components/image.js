import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {

	@tracked visible = false;

	@action didEnterViewport(element) {
		this.visible = true;
	}

}
