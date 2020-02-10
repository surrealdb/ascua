import Property from './property';
import Datetime from '../types/datetime';

export default Property({
	get(key) {
		return Datetime(this.data[key]);
	},
	set(key, value) {
		return this.data[key] = Datetime(value);
	},
});
