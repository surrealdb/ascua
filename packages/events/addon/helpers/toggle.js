import { helper } from '@ember/component/helper';
import { get } from '@ember/object';
import { set } from '@ember/object';

function next(vals, val) {
	let idx = vals.indexOf(val);
	let len = vals.length;
	return (idx+1 === len) ? vals[0] : vals[idx+1];
}

export function toggle([prop, obj, ...vals]) {
	return () => {

		let val = get(obj, prop);

		if (vals.length >= 2) {
			val = next(vals, val);
		} else {
			val = !val;
		}

		return set(obj, prop, val);

	};
}

export default helper(toggle);
