import { computed } from '@ember/object';
import Number from '../types/number';

export default computed({
	get(key) {
		return Number(this.data[key]);
	},
	set(key, value) {
		this.data[key] = Number(value);
		this.autosave();
		return this.data[key];
	}
});
