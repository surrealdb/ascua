import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class extends Component {

	get years() {
		let b = new Date().getFullYear() - 90;
		let e = new Date().getFullYear() + 10;
		return new Array(e - b).fill(0).map( (v, i) => {
			return String(e - i);
		});
	}

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

	@action year(year) {
		let date = this.args.calendar.pivot;
		let copy = new Date(date.getTime());
		copy.setYear(year);
		this.args.calendar.current = copy;
	}

	@action reset() {
		this.args.calendar.current = new Date();
	}

}
