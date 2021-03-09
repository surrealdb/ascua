import { helper } from '@ember/component/helper';

export function historyBack() {
	return (e) => {
		if (e) e.preventDefault();
		if (e) e.stopPropagation();
		window.history.back();
	};
}

export default helper(historyBack);
