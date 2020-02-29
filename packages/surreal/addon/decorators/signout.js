import Route from '@ember/routing/route';
import { assert } from '@ember/debug';
import { inject } from '@ember/service';

export default function(target) {
	assert(
		'The @signout decorator can only be applied to a Route',
		!target || (target && target.prototype instanceof Route),
	);
	return target ? func(target) : (target) => {
		assert(
			'The @signout decorator can only be applied to a Route',
			target && target.prototype instanceof Route,
		);
		return func(target)
	};
}

function func(target) {

	target.reopen({

		store: inject(),

		surreal: inject(),

		redirectAfterSignout: 'signin',

		async beforeModel() {
			// Reset the data store.
			this.store.reset();
			// Invalidate the connection.
			await this.surreal.invalidate();
			// Redirect to the specified route.
			return this.transitionTo(this.redirectAfterSignout);
		},

	});

}
