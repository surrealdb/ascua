import ObjectProxy from '@ember/object/proxy';
import { task } from 'ember-concurrency';
import { Promise } from 'rsvp';

export default ObjectProxy.extend({

	loaded: false,

	reject: null,

	resolve: null,

	content: null,

	reset() {

		this.get('fetcher').cancelAll();

		this.setProperties({
			loaded: false,
			content: null,
		});

	},

	fetcher: task(function* () {

		this.setProperties({
			loaded: false,
			content: null,
		});

		let content = yield new Promise((res, rej) => {
			this.resolve = res; this.reject = rej;
		});

		this.setProperties({
			loaded: true,
			content: content,
		});

	}).restartable(),

});
