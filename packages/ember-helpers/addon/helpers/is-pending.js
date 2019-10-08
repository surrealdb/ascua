import Await from './await';

export default Await.extend({

	value: true,

	async process(promise) {
		try {
			await promise;
		} finally {
			try {
				this.set('value', false);
			} catch(e) {
				// Helper is no longer being rendered
			}
		}
	},

});
