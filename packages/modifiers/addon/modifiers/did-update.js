import { setModifierManager, capabilities } from '@ember/modifier';

export default setModifierManager(
	() => ({

		capabilities: capabilities('3.13', { disableAutoTracking: false }),

		createModifier() {
			return { element: null };
		},

		installModifier(state, element) {
			state.element = element;
		},

		updateModifier(state, args) {
			let [fn, ...rest] = args.positional;
			fn(state.element, ...rest, args.named);
		},

		destroyModifier() {},

	}),
	class DidUpdateModifier {}
);
