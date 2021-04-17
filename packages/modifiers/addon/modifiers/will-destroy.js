import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
	() => ({

		capabilities: capabilities('3.22', { disableAutoTracking: true }),

		createModifier() {
			return { element: null };
		},

		installModifier(state, element) {
			state.element = element;
		},

		updateModifier() {},

		destroyModifier(state, args) {
			let [fn, ...rest] = args.positional;
			fn(state.element, ...rest, args.named);
		},

	}),
	class WillDestroyModifier {}
);
