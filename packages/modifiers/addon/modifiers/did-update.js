import { setModifierManager } from '@ember/modifier';

export default setModifierManager(
	() => ({

		createModifier() {
			return { element: null };
		},

		installModifier(state, element) {
			state.element = element;
		},

		updateModifier({ element }, args) {
			if (args.positional.length > 0) {
				let [fn, ...rest] = args.positional;
				fn(element, rest, args.named);
			}
		},

		destroyModifier() {},

	}),
	class DidUpdateModifier {}
);
