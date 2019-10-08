export default function(val) {
	try {
		let obj = JSON.parse(val);
		return !!obj && typeof obj === 'object';
	} catch (e) {
		return false;
	}
}
