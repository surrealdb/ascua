import config from '@ascua/config';

const defaults = {
	enabled: true,
};

export default {

	name: 'stackdriver',

	initialize(instance) {

		// Get the addon config
		let c = Object.assign({}, defaults, config.stackdriver);

		// Only instantiate stackdriver service if enabled
		if (c.enabled === true) instance.lookup('service:stackdriver');

	},

}
