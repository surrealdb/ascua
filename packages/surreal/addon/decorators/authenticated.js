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
			this._super(...arguments);
			// Enable listening to invalidated events.
			this.surreal.on('invalidated', this, this.invalidate);
		},

		deactivate() {
			this._super(...arguments);
			// Disable listening to invalidated events.
			this.surreal.off('invalidated', this, this.invalidate);
		},

		invalidate() {
			this.transitionTo(this.redirectIfInvalidated);
		},

		async beforeModel() {
			// Wait for authentication attempt.
			await this.surreal.wait();
			// Continue with application loading.
			return this._super(...arguments);
		},

		async redirect(model, transition) {
			// Store the current desired route.
			this.surreal.transition = transition;
			// Wait for Surreal to attempt and redirect.
			return this.surreal.wait().then( () => {
				if (this.surreal.authenticated === false) {
					return this.transitionTo(this.redirectIfInvalidated);
				}
				return this._super(...arguments);
			});
		},

	});

}
