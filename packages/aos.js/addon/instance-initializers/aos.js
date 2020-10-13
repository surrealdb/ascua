import config from '@ascua/config';
import AOS from 'aos.js';

const defaults = {
	disabled: false,
};

export default {

	name: 'aos',

	initialize(instance) {

		AOS.init({
			...defaults,
			...config.aos,
		});

	},

}
