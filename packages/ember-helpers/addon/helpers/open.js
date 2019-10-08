import { helper } from '@ember/component/helper';

export function open([...params], hash, ...options) {
	return (...passed) => {
		Object.keys(hash).forEach(function(key) {
			options.push(`${key}=${hash[key]}`);
		});
		passed = passed.filter(v => v instanceof Event === false);
		window.open(params.join('') + passed.join(''), null, options.join(','));
		return params.join('') + passed.join('');
	};
}

export default helper(open);
