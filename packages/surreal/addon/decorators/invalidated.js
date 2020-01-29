import Route from '@ember/routing/route';
import { assert } from '@ember/debug';
import { inject } from '@ember/service';

export default function(target) {
	assert(
		'The @invalidated decorator can only be applied to a Route',
		!target || (target && target.prototype instanceof Route),
	);
	return target ? func(target) : (target) => {
		assert(
			'The @invalidated decorator can only be applied to a Route',
			target && target.prototype instanceof Route,
		);
		return func(target)
	};
}

function authenticate() {
	if (this.surreal.transition) {
		this.surreal.transition.retry();
	} else {
		this.transitionTo(this.redirectIfAuthenticated);
	}
}

function func(target) {

	target.reopen({

		surreal: inject(),

		redirectIfAuthenticated: 'index',

		activate() {
			this._super(...arguments);
			// Enable listening to authenticated events.
			this.surreal.on('authenticated', this, authenticate);
		},

		deactivate() {
			this._super(...arguments);
			// Disable listening to authenticated events.
			this.surreal.off('authenticated', this, authenticate);
		},

		async beforeModel(transition) {
			// Wait for authentication attempt.
			await this.surreal.wait();
			// Redirect if connection is invalidated.
			if (this.surreal.authenticated === true) {
				return this.transitionTo(this.redirectIfAuthenticated);
			}
			// Continue with application loading.
			return this._super(...arguments);
		},

	});

}
