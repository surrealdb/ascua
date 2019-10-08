import { helper } from '@ember/component/helper';

export function focus([id]) {
	return () => {
		document.getElementById(id).focus();
		return false;
	};
}

export default helper(focus);
