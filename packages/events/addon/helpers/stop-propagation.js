import { helper } from '@ember/component/helper';

export function stopPropagation([ func = () => {} ]) {
	return (event) => {
		event.stopPropagation();
		return func();
	};
}

export default helper(stopPropagation);
