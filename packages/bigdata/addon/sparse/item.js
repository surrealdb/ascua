import ObjectProxy from '@ember/object/proxy';

const noop = () => {};

export default ObjectProxy.extend({

	reject: noop,

	resolve: noop,

	content: null,

	async setup() {

		try {

			let content = await new Promise( (res, rej) => {
				this.resolve = res; this.reject = rej;
			});

			this.set('content', content);

		} catch (e) {

			// Ignore

		} finally {

			this.reject();

		}

	}

});
