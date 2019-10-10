import { helper } from '@ember/component/helper';

export function historyBack() {
	return () => {
		window.history.back();
	};
}

export default helper(historyBack);
