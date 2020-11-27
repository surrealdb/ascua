export default function(obj) {
	return function(target, key, desc) {
		return {
			configurable: true,
			enumerable: true,
			writeable: false,
			get() {
				return obj.get.apply(this, [key]);
			},
			set(value) {
				let old = this.data[key];
				let now = obj.set.apply(this, [key, value]);
				if (old !== now) this.notifyPropertyChange(key);
				if (old !== now) this.autosave();
				return now;
			},
		}
	}
}
