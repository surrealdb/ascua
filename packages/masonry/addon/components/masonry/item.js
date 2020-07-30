import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class extends Component {

	@action didCreate(el) {

		[].forEach.call(el.querySelectorAll('img'), img => {
			img.addEventListener('load', () => {
				this.args.reload();
			});
			img.addEventListener('error', () => {
				this.args.reload();
			});
		});

		this.args.observer.observe(el, {
			childList: true,
			subtree: true,
		});

	}

}
