import { helper } from '@ember/component/helper';

export function historyForward() {
	return (e) => {
		if (e) e.preventDefault();
		if (e) e.stopPropagation();
		window.history.forward();
	};
}

export default helper(historyForward);
