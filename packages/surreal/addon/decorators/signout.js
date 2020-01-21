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

		redirect(model, transition) {
			return this.surreal.invalidate().then( () => {
				// Unload all data store records.
				this.store.reset();
				// Redirect to the specified route.
				return this.transitionTo(this.redirectAfterSignout);
			});
		},

	});

}
