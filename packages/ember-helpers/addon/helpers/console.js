import { helper } from '@ember/component/helper';

export function debug([...params], { type = 'log' }) {
	return (...passed) => {

		let args = [...params, ...passed];

		/* eslint-disable no-console */
		switch (type) {
		case 'trace':
			return console.trace(...args);
		case 'debug':
			return console.debug(...args);
		case 'info':
			return console.info(...args);
		case 'log':
			return console.log(...args);
		case 'warn':
			return console.warn(...args);
		case 'error':
			return console.error(...args);
		default:
			return console.log(...args);
		}
		/* eslint-enable no-console */

	};
}

export default helper(debug);
