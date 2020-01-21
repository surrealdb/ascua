import { computed } from '@ember/object';
import Datetime from '../types/datetime';

export default computed({
	get(key) {
		return Datetime(this.data[key]);
	},
	set(key, value) {
		this.data[key] = Datetime(value);
		this.autosave();
		return this.data[key];
	}
});
