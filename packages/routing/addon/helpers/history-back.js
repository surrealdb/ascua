import { helper } from '@ember/component/helper';

export function historyBack() {
	return (e) => {
		e.preventDefault();
		e.stopPropagation();
		window.history.back();
	};
}

export default helper(historyBack);
