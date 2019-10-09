const defaults = {
	enabled: true,
	autoupdate: false,
	frequency: 5 * 60 * 1000,
};

export default {

	name: 'update',

	initialize(instance) {

		// Get the app config
		let c = instance.resolveRegistration('config:environment');

		// Set the addon config
		let o = Object.assign({}, defaults, c.ascua && c.ascua.update);

		// Register the addon config
		instance.register('ascua:update', o, { instantiate: false });

		// Only instantiate update service if enabled
		if (o.enabled === true) instance.lookup('service:update');

	},

}
