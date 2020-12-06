import Helper from '@ember/component/helper';
import { inject } from '@ember/service';
import Moment from 'moment';

export default class extends Helper {

	@inject clock;

	compute() {
		return Moment(this.clock.now);
	}

}
