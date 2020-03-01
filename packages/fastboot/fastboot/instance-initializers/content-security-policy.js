import config from '@ascua/config';

const unique = function(array) {
	return array.filter( (value, index, self) => {
		return self.indexOf(value) === index;
	});
};

const NONE = "'none'";
const SELF = "'self'";

let defaults = {
	report: true,
	policy: {
		'default-src': [NONE],
		'img-src': [SELF],
		'style-src': [SELF],
		'script-src': [SELF],
		'connect-src': [SELF],
		'block-all-mixed-content': null,
	},
};

export default {

	name: 'content-security-policy',

	initialize(instance) {

		if (config.CSP === undefined) return;

		let fastboot = instance.lookup('service:fastboot');

		let opts = Object.assign({}, defaults, { ...config.CSP });

		if (config.environment !== 'production') opts.report = true;

		let bits = Object.keys(opts.policy).map(k => {
			switch (true) {
			case typeof opts.policy[k] === 'string':
				return k + ' ' + opts.policy[k];
			case Array.isArray(opts.policy[k]) === true:
				return k + ' ' + unique(opts.policy[k]).join(' ');
			default:
				return k;
			}
		});

		let head = bits.join('; ');

		switch (opts.report) {
		case true:
			return fastboot.response.headers.set('Content-Security-Policy-Report-Only', head);
		case false:
			return fastboot.response.headers.set('Content-Security-Policy', head);
		}

	},

}
