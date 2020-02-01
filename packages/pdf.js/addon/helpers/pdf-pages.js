import { helper } from '@ember/component/helper';

export function pdfPages([total=0]) {
	return new Array(total).fill().map( (v, k) => k+1);
}

export default helper(pdfPages);
