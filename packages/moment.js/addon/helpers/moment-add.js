import Helper from '@ember/component/helper';
import { inject } from '@ember/service';
import { observe } from '@ascua/decorators';
import Moment from 'moment';

export default class extends Helper {

	@inject clock;

	@observe('clock.quart') changed() {
		this.recompute();
	}

	compute([ value = undefined, c = undefined, t = undefined ], { options = undefined }) {
		if (options) {
			return Moment(value).add( Object.assign({}, options) );
		} else {
			return Moment(value).add(c, t);
		}
	}

}
