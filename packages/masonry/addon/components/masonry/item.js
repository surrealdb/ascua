import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {

	@tracked display = false;

	@action didCreate(el) {

		this.args.observer.observe(el, {
			childList: true,
			subtree: true,
		});

		this.display = true;

	}

}
