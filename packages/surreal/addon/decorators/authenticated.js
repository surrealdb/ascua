import Route from '@ember/routing/route';
import { assert } from '@ember/debug';
import { inject } from '@ember/service';

export default function(target) {
	assert(
		'The @authenticated decorator can only be applied to a Route',
		!target || (target && target.prototype instanceof Route),
	);
	return target ? func(target) : (target) => {
		assert(
			'The @authenticated decorator can only be applied to a Route',
			target && target.prototype instanceof Route,
		);
		return func(target)
	};
}

function func(target) {

	target.reopen({

		surreal: inject(),

		redirectIfInvalidated: 'signin',

		activate() {
			super.activate(...arguments);
			// Enable listening to invalidated events.
			this.surreal.on('invalidated', this, this.invalidate);
		},

		deactivate() {
			super.deactivate(...arguments);
			// Disable listening to invalidated events.
			this.surreal.off('invalidated', this, this.invalidate);
		},

		invalidate() {
			if (this.surreal.transition) {
				this.surreal.transition.retry();
			} else {
				this.transitionTo(this.redirectIfInvalidated);
			}
		},

		beforeModel() {
			super.beforeModel(...arguments);
			// Wait for authentication attempt.
			return this.surreal.wait('attempted');
		},

		redirect(model, transition) {
			// Store the current desired route.
			this.surreal.transition = transition;
			// Wait for Surreal to attempt and redirect.
			return this.surreal.wait('attempted').then( () => {
				if (this.surreal.authenticated === false) {
					return this.transitionTo(this.redirectIfInvalidated);
				}
				return super.redirect(...arguments);
			});
		},

	});

}
