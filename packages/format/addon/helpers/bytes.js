import { helper } from '@ember/component/helper';

export function bytes([val]) {
	let amnt = parseFloat(val) || 0;
	let unit = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
	let size = parseInt( Math.floor( Math.log(amnt) / Math.log(1024) ) );
	return Math.round( amnt / Math.pow(1024, size), 2) + ' ' + unit[size];
}

export default helper(bytes);
