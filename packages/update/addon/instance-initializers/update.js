import config from '@ascua/config';

const defaults = {
	enabled: true,
};

export default {

	name: 'update',

	initialize(instance) {

		// Get the addon config
		let c = Object.assign({}, defaults, config.update);

		// Only instantiate update service if enabled
		if (c.enabled === true) instance.lookup('service:update');

	},

}
