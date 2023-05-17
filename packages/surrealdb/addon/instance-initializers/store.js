export default {
  name: 'store',

  initialize(instance) {
    // Instantiate the store service
    instance.lookup('service:store');

    // Inject the store into all routes
    instance.application.inject('route', 'store', 'service:store');
  },
};
