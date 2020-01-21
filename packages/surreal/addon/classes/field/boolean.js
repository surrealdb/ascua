import { computed } from '@ember/object';
import Boolean from '../types/boolean';

export default computed({
	get(key) {
		return Boolean(this.data[key]);
	},
	set(key, value) {
		this.data[key] = Boolean(value);
		this.autosave();
		return this.data[key];
	}
});
