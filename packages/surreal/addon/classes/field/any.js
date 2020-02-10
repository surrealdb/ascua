import Property from './property';
import Any from '../types/any';

export default Property({
	get(key) {
		return Any(this.data[key]);
	},
	set(key, value) {
		return this.data[key] = Any(value);
	},
});
