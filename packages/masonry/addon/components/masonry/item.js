import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class extends Component {

	@action didCreate(el) {

		this.args.observer.observe(el, {
			childList: true,
			subtree: true,
		});

	}

}
