import { helper } from '@ember/component/helper';

export function delay([ wait = 0 ]) {

	if (!wait) return Promise.resolve(wait);

	return new Promise(resolve => {
		setTimeout(resolve.bind(this, wait), wait);
	});

}

export default helper(delay);
