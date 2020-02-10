import Property from './property';
import Boolean from '../types/boolean';

export default Property({
	get(key) {
		return Boolean(this.data[key]);
	},
	set(key, value) {
		return this.data[key] = Boolean(value);
	},
});
