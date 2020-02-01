import Helper from '@ember/component/helper';
import { inject } from '@ember/service';
import { observe } from '@ascua/decorators';
import Moment from 'moment';

export default class extends Helper {

	@inject clock;

	@observe('clock.quart') changed() {
		this.recompute();
	}

	compute() {
		return Moment(this.clock.now);
	}

}
