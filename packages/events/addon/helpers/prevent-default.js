import { helper } from '@ember/component/helper';

export function preventDefault([ func = () => {} ]) {
	return (event) => {
		event.preventDefault();
		return func();
	};
}

export default helper(preventDefault);
