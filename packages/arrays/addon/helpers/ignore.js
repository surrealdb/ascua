import { helper } from '@ember/component/helper';

export function ignore([fnc]) {
	return () => fnc.call(this);
}

export default helper(ignore);
