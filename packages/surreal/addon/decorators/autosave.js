import Model from '../model';
import { STATE } from '../model';
import { UPDATED } from '../model';
import { assert } from '@ember/debug';

export default function(target) {
	assert(
		'The @autosave decorator can only be applied to a Model',
		!target || (target && target.prototype instanceof Model),
	);
	return target ? func(target) : (target) => {
		assert(
			'The @autosave decorator can only be applied to a Model',
			target && target.prototype instanceof Model,
		);
		return func(target)
	};
}

function func(target) {

	target.reopen({

		autosave() {
			if (this[STATE] === UPDATED) {
				return this.save();
			}
		},

	});

}
