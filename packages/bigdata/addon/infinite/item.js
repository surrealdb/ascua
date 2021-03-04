import ObjectProxy from '@ember/object/proxy';

const noop = () => {};

export default ObjectProxy.extend({

	reject: noop,

	resolve: noop,

	promise: null,

	content: null,

	init() {

		this._super(...arguments);

		this.promise = new Promise( (res, rej) => {
			this.resolve = res; this.reject = rej;
		});

		this.promise.then(content => {
			this.set('content', content);
		});

	},

	then() {
		return this.promise.then(...arguments);
	},

	catch() {
		return this.promise.catch(...arguments);
	},

	finally() {
		return this.promise.finally(...arguments);
	},

});
