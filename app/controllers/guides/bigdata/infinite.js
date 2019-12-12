import Controller from '@ember/controller';
import { infinite } from '@ascua/bigdata';

export default class extends Controller {

	search = '';

	@infinite(10, 'search', async function(ctx, range) {
		return new Array(range.limit).fill().map( (v, k) => {
			return { id: range.start + k + 1 };
		});
	}) data;

}
