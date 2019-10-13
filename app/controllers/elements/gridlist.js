import Controller from '@ember/controller';
import Sparse from '@ascua/bigdata/sparse';

export default class extends Controller {

	items = new Array(1000).fill().map( (v, k) => {
		return { id: k+1 };
	});

	bigdata = new Sparse(10, async (range) => {
		return { total: 1000, data: new Array(range.limit).fill().map( (v, k) => {
			return { id: range.start + k + 1 };
		})};
	});

}
