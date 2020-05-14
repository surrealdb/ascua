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
	}

	@action didChange(el) {
		[].forEach.call(el.querySelectorAll('img'), img => {
			img.addEventListener('load', () => {
				this.args.reload();
			});
			img.addEventListener('error', () => {
				this.args.reload();
			});
		});
	}

	@action didReload(el) {

		this.args.reload();

		[].forEach.call(el.querySelectorAll('img'), img => {
			img.addEventListener('load', () => {
				this.args.reload();
			});
			img.addEventListener('error', () => {
				this.args.reload();
			});
		});

	}

}
