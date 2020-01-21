import { computed } from '@ember/object';
import String from '../types/string';

export default computed({
	get(key) {
		return String(this.data[key]);
	},
	set(key, value) {
		this.data[key] = String(value);
		this.autosave();
		return this.data[key];
	}
});
