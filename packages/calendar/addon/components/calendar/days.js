import Component from '@glimmer/component';
import { action } from '@ember/object';

const same = (a, b) => {
	return a && b
		&& a.getFullYear() === b.getFullYear()
		&& a.getMonth() === b.getMonth()
		&& a.getDate() === b.getDate()
	;
}

export default class extends Component {

	names = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

	@action click(day) {
		if (this.args.calendar.args.onSelect) {
			this.args.calendar.args.onSelect(day.date);
		}
		this.args.calendar.close();
	}

	get weeks() {

		let rows = [];

		let date = this.args.calendar.pivot;
		let copy = new Date(date.getTime());

		let dim = new Date(copy.getFullYear(), copy.getMonth(), 0); // Days in month
		let sow = new Date(copy.getFullYear(), copy.getMonth(), 1); // Start of week
		let fom = new Date(copy.getFullYear(), copy.getMonth(), 1); // First of month
		let lom = new Date(copy.getFullYear(), copy.getMonth() + 1, 0); // Last of month
		let dow = fom.getDay() - 1; if (dow < 0) dow += 7; // Day of week of first of month
		let wim = Math.ceil( (dow + lom.getDate()) / 7); // Total weeks in month
		let now = new Date();

		sow.setDate(sow.getDate() + dow * -1); // Go to first day on calendar

		for (let w=0; w<wim; w++) {
			rows.push({ days: [] });
			for (let i=0; i<7; i++) {
				rows[w].days.push({
					date: sow.toJSON(),
					count: sow.getDate(),
					today: same(sow, now),
					faint: sow.getMonth() !== copy.getMonth(),
					picked: same(sow, this.args.calendar.value),
				});
				sow.setDate(sow.getDate() + 1); // Move to next day on calendar
			}
		}

		return rows;

	}

}
