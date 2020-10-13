import config from '@ascua/config';
import AOS from 'aos.js';

const defaults = {
	disabled: false,
};

export default {

	name: 'aos',

	initialize(instance) {

		if (AOS) {

			AOS.init({
				...defaults,
				...config.aos,
			});

		}

	},

}
