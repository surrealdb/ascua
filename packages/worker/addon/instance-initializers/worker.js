import config from '@ascua/config';

const defaults = {
	enabled: true,
};

export default {

	name: 'worker',

	initialize(instance) {

		// Get the addon config
		let c = Object.assign({}, defaults, config.worker);

		// Only instantiate worker service if enabled
		if (c.enabled === true) instance.lookup('service:worker');

	},

}
