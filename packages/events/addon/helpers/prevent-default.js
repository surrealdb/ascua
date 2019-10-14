import { helper } from '@ember/component/helper';

export function preventDefault([ func = () => {} ]) {
	return (event) => {
		event.preventDefault();
		return func(event);
	};
}

export default helper(preventDefault);
