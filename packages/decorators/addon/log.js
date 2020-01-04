export default function(target, key, desc) {

	const original = desc.value;

	if (typeof original === 'function') {
		desc.value = function(...args) {
			console.log(this, key, ...args);
			return original.apply(this, args);
		};
	}

	return desc;

}
