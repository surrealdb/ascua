import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { action } from '@ember/object';

export default class extends Component {

	@computed('args.value')
	get value() {
		return this.args.value || '';
	}

	@action changed(event) {
		if (this.args.onChangeHtml) {
			this.args.onChangeHtml(event.target.innerHTML);
		}
		if (this.args.onChangeText) {
			this.args.onChangeText(event.target.textContent);
		}
	}

}
