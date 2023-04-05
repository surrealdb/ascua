import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class extends Component {

	@action didCreate(el) {

		if (!this.args.observer) return;

		this.args.observer.observe(el, {
			childList: true,
			subtree: true,
		});

	}

}
