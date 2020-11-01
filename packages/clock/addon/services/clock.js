import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Poller from '../classes/poller';

export default class extends Service {

	@tracked poller;

	@tracked now;
	@tracked full;
	@tracked year;
	@tracked month;
	@tracked day;
	@tracked hour;
	@tracked minute;
	@tracked second;
	@tracked quart;

	constructor() {

		super(...arguments);

		this.poller = new Poller(1000);

		this.poller.start(this, this.tick);

	}

	willDestroy() {

		this.poller.clear();

		super.willDestroy(...arguments);

	}

	tick() {

		const date = new Date();

		this.now = date;
		this.full = date;
		this.year = date.getFullYear();
		this.month = date.getMonth() + 1;
		this.day = date.getDate();
		this.hour = date.getHours();
		this.minute = date.getMinutes();
		this.second = date.getSeconds();
		this.quart = Math.ceil( date.getSeconds() / 15 );

	}

}
