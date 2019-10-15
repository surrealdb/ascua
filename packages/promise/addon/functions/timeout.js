export default function(wait=0) {
	return new Promise(resolve => {
		setTimeout(resolve.bind(this, wait), wait);
	});
}
