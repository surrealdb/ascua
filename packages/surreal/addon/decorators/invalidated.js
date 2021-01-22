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

function func(target) {

	let enter = target.prototype.activate;

	let leave = target.prototype.deactivate;

	let before = target.prototype.beforeModel;

	target.reopen({

		surreal: inject(),

		redirectIfAuthenticated: 'index',

		activate() {
			enter.apply(this, ...arguments);
			// Enable listening to authenticated events.
			this.surreal.on('authenticated', this, this.authenticate);
		},

		deactivate() {
			leave.apply(this, ...arguments);
			// Disable listening to authenticated events.
			this.surreal.off('authenticated', this, this.authenticate);
		},

		authenticate() {
			if (this.surreal.transition) {
				this.surreal.transition.retry();
			} else {
				this.transitionTo(this.redirectIfAuthenticated);
			}
		},

		beforeModel(transition) {
			// Redirect if connection is authenticated.
			if (this.surreal.authenticated === true) {
				return this.replaceWith(this.redirectIfAuthenticated);
			}
			// Continue with original hook.
			return before.apply(this, ...arguments);
		},

	});

}
