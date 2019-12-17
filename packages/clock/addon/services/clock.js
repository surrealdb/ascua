import Service from '@ember/service';
import Poller from '../classes/poller';

export default class extends Service {

	ticker = null;
	year = null;
	month = null;
	day = null;
	hour = null;
	minute = null;
	second = null;
	quart = null;

	constructor() {

		super(...arguments);

		this.poller = new Poller(1000);

		this.poller.start(this, this.tick);

	}

	willDelete() {

		this.poller.clear();

		super.willDelete(...arguments);

	}

	tick() {

		const date = new Date();

		this.setProperties({
			full: date,
			year: date.getFullYear(),
			month: date.getMonth(),
			day: date.getDate(),
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds(),
			quart: Math.ceil( date.getSeconds() / 15 ),
		});

	}

}
