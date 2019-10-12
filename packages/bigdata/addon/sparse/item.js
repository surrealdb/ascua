import ObjectProxy from '@ember/object/proxy';
import { task } from 'ember-concurrency';

export default ObjectProxy.extend({

	reject: null,

	resolve: null,

	content: null,

	reset() {

		this.fetcher.cancelAll();

		this.set('content', null);

	},

	fetcher: task(function* () {

		this.set('content', null);

		let content = yield new Promise((res, rej) => {
			this.resolve = res; this.reject = rej;
		});

		this.set('content', content);

	}).restartable(),

});
