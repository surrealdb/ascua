import Helper from '@ember/component/helper';
import { inject } from '@ember/service';

export default Helper.extend({

	compute([path]) {
		return `${this.env.rootURL}/${path}`.replace(/\/\/+/g, '/');
	},
});
