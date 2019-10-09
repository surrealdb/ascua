import Await from './await';

export default Await.extend({

	value: false,

	async process(promise) {
		try {
			await promise;
			this.set('value', true);
		} catch(e) {
			try {
				this.set('value', false);
			} catch(e) {
				// Helper is no longer being rendered
			}
		}
	},

});
