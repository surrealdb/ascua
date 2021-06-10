function enabled() {
	try {
		if (!window) throw "exception";
		if (!document) throw "exception";
		if (!document.createElement) throw "exception";
		return true;
	} catch (e) {
		return false;
	}
}

export default {

	name: 'metrics',

	initialize(instance) {

		// Check if browser
		let x = enabled();

		// Get the metrics service
		let s = instance.lookup('service:metrics');

		// Get the current environment
		let c = instance.resolveRegistration('config:environment');

		// Prevent lookedup metrics from instantiating
		instance.registerOptionsForType('metric', { instantiate: false });

		[].concat(c.metrics).filter(Boolean).forEach(metric => {

			// Does the specified metric exist?
			let f = instance.lookup(`metric:${metric.name}`);

			// Should the metric run in this environment?
			let e = metric.environments.includes(c.environment);

			if (x && f && e) {

				let o = f.create(instance.ownerInjection(), {
					config: metric.config
				});

				s.platforms.push(o);

				s[metric.name] = o;

			}

		});

	},

}
