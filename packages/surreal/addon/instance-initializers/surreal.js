import Surreal from 'surreal';
import { typeOf } from '@ember/utils';
import unid from '../utils/unid';

export default {

	name: 'surreal',

	initialize(instance, application) {

		// Get the app config
		let c = instance.resolveRegistration('config:environment');

		if (typeOf(c.surreal) !== 'object') {
			throw new Error("Please set the `surreal` property in your environment config.");
		}

		if (typeOf(c.surreal.ns) !== 'string') {
			throw new Error("Please set the `surreal.ns` property in your environment config as a string.");
		}

		if (typeOf(c.surreal.db) !== 'string') {
			throw new Error("Please set the `surreal.db` property in your environment config as a string.");
		}

		let config = { opts: [] };

		config.url = c.surreal.uri ? `${c.surreal.uri}/rpc` : Surreal.EU;

		config.opts.id = unid();
		config.opts.ns = c.surreal.ns;
		config.opts.db = c.surreal.db;

		// Register the addon config
		instance.register('ascua:surreal', config, { instantiate: false });

		// Instantiate the surreal service
		instance.lookup('service:surreal');

	},

}
