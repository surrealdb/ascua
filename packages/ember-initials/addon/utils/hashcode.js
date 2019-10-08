export default function (value, length) {
	let code = hasher(value);
	let item = Math.floor(code % length);
	return Math.abs(item);
}

function hasher(string) {

	let hash = 0;

	if (string && string.length > 0) {
		for (let i = 0; i < string.length; i++) {
			let char = string.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash |= 0; // Convert to 32bit integer
		}
	}

	return hash & hash;

}
