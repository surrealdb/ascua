import { helper } from '@ember/component/helper';

export function reload() {
	return () => {
		window.location.reload();
	};
}

export default helper(reload);
