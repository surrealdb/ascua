import Electron from 'electron';

const defaults = {
	autoupdate: false,
};

export default {

	name: 'electron',

	initialize(instance) {

		// Get the app config
		let c = instance.resolveRegistration('config:environment');

		// Set the addon config
		let o = Object.assign({}, defaults, c.ascua && c.ascua.electron);

		// Register the addon config
		instance.register('ascua:electron', o, { instantiate: false });

		// Only instantiate electron service if enabled
		if (Electron) instance.lookup('service:electron');

	},

}
