const json = (v) => JSON.stringify(v);

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

				let old = json(this.data[key]);
				let val = obj.set.apply(this, [key, value]);
				let now = json(val);

				if (old !== now) {
					this.data = this.data;
					this.autosave();
				}

				return val;

			},
		}
	}
}
