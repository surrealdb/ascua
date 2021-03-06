import { helper } from '@ember/component/helper';

export function historyForward() {
	return (e) => {
		e.preventDefault();
		e.stopPropagation();
		window.history.forward();
	};
}

export default helper(historyForward);
