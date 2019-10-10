import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
	() => ({

		capabilities: capabilities ? capabilities('3.13') : undefined,

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
