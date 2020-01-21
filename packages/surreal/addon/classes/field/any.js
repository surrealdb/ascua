import { computed } from '@ember/object';

export default computed({
	get(key) {
		return this.data[key];
	},
	set(key, value) {
		this.data[key] = value;
		this.autosave();
		return this.data[key];
	}
});
