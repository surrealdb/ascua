import { helper } from '@ember/component/helper';

export function delay([ wait = 0 ]) {

	if (!wait) return Promise.resolve();

	return new Promise(resolve => {
		setTimeout(resolve.bind(this), wait);
	});

}

export default helper(delay);
