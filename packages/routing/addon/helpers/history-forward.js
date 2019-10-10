import { helper } from '@ember/component/helper';

export function historyForward() {
	return () => {
		window.history.forward();
	};
}

export default helper(historyForward);
