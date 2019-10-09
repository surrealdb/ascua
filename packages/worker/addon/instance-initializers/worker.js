const defaults = {
	enabled: true,
	autoupdate: false,
	frequency: 5 * 60 * 1000,
};

export default {

	name: 'worker',

	initialize(instance) {

		// Get the app config
		let c = instance.resolveRegistration('config:environment');

		// Set the addon config
		let o = Object.assign({}, defaults, c.ascua && c.ascua.worker);

		// Register the addon config
		instance.register('ascua:worker', o, { instantiate: false });

		// Only instantiate worker service if enabled
		if (o.enabled === true) instance.lookup('service:worker');

	},

}
