export default function(target, key, desc) {
	return {
		configurable: true,
		enumerable: true,
		get() {
			return this.args[key] || desc.initializer();
		},
	}
}
