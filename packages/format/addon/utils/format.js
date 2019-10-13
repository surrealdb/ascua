export default function format(number, points=0, dec=".", sep=",") {

	points = parseInt(points);
	number = parseFloat(number);

	points = isFinite(points) ? Math.abs(points) : 0;
	number = isFinite(number) ? number.toFixed(points) : (0).toFixed(points);

	let b = number.split('.')[0];
	let r = number.split('.')[1] || 0;
	let a = number >= 0 ? '' : '-';
	let m = b.length > 3 ? b.length % 3 : 0;

	return a + (m ? b.substr(0, m) + sep : "") + b.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + sep) + (points ? dec + r : "");

}
