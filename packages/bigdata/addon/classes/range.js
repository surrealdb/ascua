import EmberObject from '@ember/object';
import { task, timeout } from 'ember-concurrency';

export default EmberObject.extend({

	init(range) {
		this.range = range;
	},

	fetchTask: task(function* (ctx, fetch, props) {

		yield timeout(500);

		let query = ctx.getProperties(...props);

		return fetch.call(ctx, this.range, query);

	}).restartable(),

});
