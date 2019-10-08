import { setModifierManager } from '@ember/modifier';

export default setModifierManager(
	() => ({

		createModifier() {},

		installModifier(state, element, args) {
			if (args.positional.length > 0) {
				let [fn, ...rest] = args.positional;
				fn(element, rest, args.named);
			}
		},

		updateModifier() {},

		destroyModifier() {},

	}),
	class DidInsertModifier {}
);
