import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class extends Component {

	@action prev() {
		let date = this.args.calendar.pivot;
		let copy = new Date(date.getTime());
		copy.setMonth(date.getMonth() - 1);
		this.args.calendar.current = copy;
	}

	@action next() {
		let date = this.args.calendar.pivot;
		let copy = new Date(date.getTime());
		copy.setMonth(date.getMonth() + 1);
		this.args.calendar.current = copy;
	}

	@action reset() {
		this.args.calendar.current = new Date();
	}

}
