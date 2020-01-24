import { helper } from '@ember/component/helper';

export default helper(function() {
	return Math.random().toString(36).substr(2, 9);
})
