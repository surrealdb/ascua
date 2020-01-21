export default {

	name: 'store',

	initialize(application) {
		application.inject('model', 'store', 'service:store');
		application.inject('route', 'store', 'service:store');
		application.inject('controller', 'store', 'service:store');
	},

}
