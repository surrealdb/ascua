import Property from './property';
import Number from '../types/number';

export default Property({
	get(key) {
		return Number(this.data[key]);
	},
	set(key, value) {
		return this.data[key] = Number(value);
	},
});
