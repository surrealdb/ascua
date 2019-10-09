function letter(word) {
	return word ? word[0].toUpperCase() : '';
}

export default function(value) {

	let name = value ? String(value).trim() : '';
	let part = name.split(' ');

	if (part.length > 1) {
		let f = letter( part.shift() );
		let l = letter( part.pop() );
		return f + l;
	} else {
		return letter( part.shift() );
	}

}
