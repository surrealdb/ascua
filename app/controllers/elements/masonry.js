import Controller from '@ember/controller';
import { infinite } from '@ascua/bigdata';

export default class extends Controller {

	@infinite(50, async function(ctx, range) {
		await ctx.delay(100);
		return new Array(range.limit).fill().map( (v, k) => {
			return { id: range.start+k+1, h: Math.floor( Math.random() * (400 - 100 + 1) + 100 ) };
		});
	}) items;

}
