import Controller from '@ember/controller';
import { sparse } from '@ascua/bigdata';

export default class extends Controller {

	search = '';

	@sparse(10, 'search', async function(ctx, range) {
		await ctx.delay(1000);
		return { total: 1000, data: new Array(range.limit).fill().map( (v, k) => {
			return { id: range.start + k + 1 };
		})};
	}) data;

}
