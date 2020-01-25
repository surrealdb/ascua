import Electron from 'electron';

export default {

	name: 'electron',

	initialize(instance) {

		// Only instantiate electron service if enabled
		if (Electron) instance.lookup('service:electron');

	},

}
